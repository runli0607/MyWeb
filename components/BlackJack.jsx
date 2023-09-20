import styles from "../styles/BJ.module.css"
import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function BlackJack() {
    const [player, setPlayer] = useState({
        name: "Per",
        chips: 100
    })
    const [fullDeck, setFullDeck] = useState(deckOfCards);
    const [message, setMessage] = useState('');
    const [cards, setCards] = useState([])
    const [sum, setSum] = useState(0);
    const [sumAce, setSumAce] = useState(0);
    const [hasAce, setHasAce] = useState(false);
    const [dealerCards, setDealerCards] = useState([])
    const [dealerSum, setDealerSum] = useState(0);
    const [hasBlackJack, setHasBlackJack] = useState(false);
    const [isAlive, setIsAlive] = useState(false);

    function deckOfCards() {
        console.log("its generating new cards")
        const cardList = []
        const suit = ['clubs', 'diamonds', 'hearts', 'spades']
        const number = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < number.length; j++) {
                cardList.push({
                    id: uuidv4(),
                    alt: `${number[j]} of ${suit[i]}`,
                    cardNumber: number[j],
                    value: convertCardToValue(number[j]),
                    url: `/cards/${number[j]}_of_${suit[i]}.png`
                })
            }
        }
        return cardList
    }
    function convertCardToValue(card) {
        if (card === 'ace') {
            return 1
        } else if (card === 'jack' || card === 'queen' || card == 'king') {
            return 10
        } else {
            return Number(card)
        }

    }

    function getRandomCard() {
        let randomCard = Math.floor(Math.random() * fullDeck.length)
        return fullDeck[randomCard]
    }

    function startGame() {
        setIsAlive(true)
        setHasAce(false)
        setHasBlackJack(false)
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        while (firstCard === secondCard) {
            firstCard = getRandomCard()
        }
        let dealerFirst = getRandomCard()
        setCards([firstCard, secondCard])
        setSum(firstCard.value + secondCard.value)
        if (firstCard.cardNumber === "ace" || secondCard.cardNumber === 'ace') {
            setSumAce(checkAceValue([firstCard, secondCard]))
            if (checkAceValue([firstCard, secondCard]) === 21) {
                setMessage("You've got Blackjack!")
                setPlayer(prev => {
                    return {
                        ...prev,
                        chips: prev.chips + 7.5
                    }

                })
                setHasBlackJack(true)
            }
        }
        setDealerCards([dealerFirst])
        setDealerSum(dealerFirst.value)
    }

    useEffect(() => {
        if (sum <= 20) {
            setMessage("Do you want to draw a new card?")
        } else if (sum === 21 || checkAceValue(cards) === 21) {
            setMessage("You've got Blackjack!")
            setPlayer(prev => {
                return {
                    ...prev,
                    chips: prev.chips + 7.5
                }

            })
            setHasBlackJack(true)
        } else {
            setMessage("You're out of the game!")
            setPlayer(prev => {
                return {
                    ...prev,
                    chips: prev.chips - 5
                }

            })
            setIsAlive(false)
        }
        if (checkAceValue(cards) > 21) {
            setHasAce(false)
        }
    }, [cards]);




    useEffect(() => {
        setMessage('Want to play a round?')
    }, []);

    function newCard() {
        if (isAlive && !hasBlackJack) {
            let card = getRandomCard()
            while (cards.includes(card)) {
                card = getRandomCard()
            }
            let newsum = sum + card.value
            setSum(prev => prev + card.value)
            setCards(prev => [...prev, card])
            if (card.cardNumber === 'ace') {
                setSumAce(checkAceValue([...cards, card]))
                if ((newsum + 11) > 21) {
                    setHasAce(false)
                }
            }
        }
    }

    async function concludeGame() {
        let dealersum = dealerSum
        let dealercard = getRandomCard()
        while (dealerCards.includes(dealercard)) {
            dealercard = getRandomCard()
        }
        dealersum += dealercard.value
        setDealerCards(prev => [...prev, dealercard])
        setDealerSum(prev => prev + dealercard.value)
        let dealerFinalCard = [dealercard]
        while (dealersum < 17) {
            await delay(500)
            let card = getRandomCard()
            while (dealerFinalCard.includes(card)) {
                card = getRandomCard()
            }
            dealerFinalCard.push(card)
            setDealerCards(prev => [...prev, card])
            setDealerSum(prev => prev + card.value)
            dealersum += card.value
        }
        if (dealersum > 21) {
            setMessage("You win this turn!")
            setPlayer(prev => {
                return {
                    ...prev,
                    chips: prev.chips + 5
                }

            })
            setIsAlive(false)
        } else if (dealersum < sum || dealersum < sumAce) {
            setMessage("You win this turn!")
            setPlayer(prev => {
                return {
                    ...prev,
                    chips: prev.chips + 5
                }

            })
            setIsAlive(false)
        } else if (dealersum >= sum && dealersum >= sumAce) {
            setMessage("You lost this turn!")
            setPlayer(prev => {
                return {
                    ...prev,
                    chips: prev.chips - 5
                }

            })
            setIsAlive(false)
        }
    }
    function delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    const cardSet = cards.map(item =>
        <div>

            <img
                src={item.url}
                alt={item.alt}
                className={styles.cards}
                key={item.id}
            />
        </div>
    )

    const dealerCardSet = dealerCards.map(item =>
        <div
        >
            <img
                src={item.url}
                alt={item.alt}
                className={styles.cards}
                key={item.id}
            />
        </div>
    )


    function checkAceValue(array) {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i].cardNumber === 'ace') {
                setHasAce(true)
                sum += 11
            } else {
                sum += array[i].value
            }
        }
        return sum
    }

    return (
        <div className={styles.container}>
            <h1>Blackjack</h1>
            <div
                className={styles.cardsbox}>
                <p>Dealer's Cards:</p>{dealerCardSet}
            </div>
            <p id="cards-el">Dealer's Sum: {dealerSum}</p>
            <p id={styles['message-el']}>{message}</p>
            <div
                className={styles.cardsbox}>
                <p>
                    Cards:
                </p>
                {cardSet}
            </div>
            <p id="sum-el">Sum:{sum}  {hasAce ? `/ ${sumAce}` : ''}</p>
            <button onClick={() => startGame()} id={styles['startBtn']}>START GAME</button>
            <div className={styles['optionBtn']}>
                {isAlive && !hasBlackJack ?
                    <button onClick={() => newCard()}>NEW CARD</button>
                    :
                    ''
                }
                {isAlive && !hasBlackJack ?
                    <button onClick={() => concludeGame()}>STAY</button>
                    :
                    ''
                }
            </div>
            <p id="player-el">$: {player.chips}</p>
        </div>
    )
}