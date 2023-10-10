import styles from "../styles/BJ.module.css"
import React, { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'


export default function BlackJack() {
    const [player, setPlayer] = useState({
        name: 'Run Li',
        chips: 30
    })
    const [fullDeck, setFullDeck] = useState(deckOfCards);
    const [message, setMessage] = useState('');
    const [hasBlackJack, setHasBlackJack] = useState(false);
    const [isAlive, setIsAlive] = useState(false);
    const [currentCard, setCurrentCard] = useState([]);
    const [conclude, setConclude] = useState(false);

    const [cards, setCards] = useState([])
    const [sum, setSum] = useState(0);
    const [sumAce, setSumAce] = useState(0);
    const [hasAce, setHasAce] = useState(false);

    const [dealerCards, setDealerCards] = useState([])
    const [dealerSum, setDealerSum] = useState(0);
    const [dealerSumAce, setDealerSumAce] = useState(0);
    const [dealerHasAce, setDealerHasAce] = useState(false);



    function deckOfCards() {
        console.log("its generating new cards")
        const cardList = []
        const suit = ['clubs', 'diamonds', 'hearts', 'spades']
        const number = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']
        for (let i = 0; i < suit.length; i++) {
            for (let j = 0; j < number.length; j++) {
                cardList.push( 
                    {
                        id: uuidv4(),
                        alt: `${number[j]} of ${suit[i]}`,
                        cardNumber: number[j],
                        value: convertCardToValue(number[j]),
                        url: `/cards/${number[j]}_of_${suit[i]}.png`
                    }
                )
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
        while (currentCard.includes(randomCard)) {
            console.log('randomcard is :' + randomCard + " current card includs" + currentCard)
            randomCard = Math.floor(Math.random() * fullDeck.length)
            console.log('so new card change to :' + randomCard)
        }
        setCurrentCard(prev => [...prev, randomCard])
        return fullDeck[randomCard]
    }

    function startGame() {
        console.log("the chips now: " + player.chips)
        if (player.chips <= 0) {
            setPlayer(prev => {
                return {
                    ...prev,
                    chips: 30
                }
            })
        }

        setConclude(false)
        setIsAlive(true)
        setHasBlackJack(false)
        setHasAce(false)
        let [firstCard, secondCard] = [getRandomCard(), getRandomCard()]
        while (firstCard === secondCard) {
            console.log('the first draw is the same: ' + firstCard.alt + ' and ' + secondCard.alt)
            firstCard = getRandomCard()
            console.log('so the first changed to ' + firstCard.alt)
        }
        setCards([firstCard, secondCard])
        setSum(firstCard.value + secondCard.value)
        setSumAce(checkAceValue([firstCard, secondCard], 'player'))

        let dealerFirst = getRandomCard()
        setDealerHasAce(false)
        setDealerCards([dealerFirst])
        setDealerSum(dealerFirst.value)
        setDealerSumAce(checkAceValue([dealerFirst], 'dealer'))
    }



    function newCard() {
        if (isAlive && !hasBlackJack) {
            let card = getRandomCard()
            console.log(currentCard)
            setSum(prev => prev + card.value)
            setCards(prev => [...prev, card])
            setSumAce(checkAceValue([...cards, card], 'player'))
        }
    }

    async function concludeGame() {
        setConclude(true)
        let dealersum = dealerSum
        let dealersumace = dealerSumAce
        // let dealercard = getRandomCard()
        // dealersum += dealercard.value
        // dealersumace = checkAceValue([...dealerCards, dealercard], 'dealer')
        // setDealerCards(prev => [...prev, dealercard])
        // setDealerSum(prev => prev + dealercard.value)
        // setDealerSumAce(checkAceValue([...dealerCards, dealercard], 'dealer'))
        let dealerFinalCard = [...dealerCards]
        while (dealersum < 17 && dealersumace < 17) {
            console.log("dealer sum :" + dealersum)
            console.log("dealer sum with ace:" + dealersumace)
            let card = getRandomCard()
            while (dealerFinalCard.includes(card)) {
                console.log('randomcard is :' + card.alt + " current card includs: " + dealerFinalCard.map(a => a.alt))
                card = getRandomCard()
                console.log('so the card change to:' + card.alt)
            }
            dealerFinalCard.push(card)
            setDealerCards(prev => [...prev, card])
            setDealerSum(prev => prev + card.value)
            dealersum += card.value
            dealersumace = checkAceValue(dealerFinalCard, 'dealer')
            setDealerSumAce(dealersumace)
            await delay(500)
        }
        if (dealersumace) {
            console.log("dealer have ace")
            console.log("final dealer sum :" + dealersum)
            console.log("final dealer sum with ace:" + dealersumace)
            console.log("final sum : " + sum)
            console.log("final sumace: " + sumAce)
            if (dealersumace > 21) {
                console.log("win here 1")
                setMessage("You win this turn!")
                setPlayer(prev => {
                    return {
                        ...prev,
                        chips: prev.chips + 5
                    }

                })
                setCurrentCard([])
                setDealerHasAce(false)
                setIsAlive(false)
            } else if (dealersumace < sum || dealersumace < sumAce) {
                console.log("win here 2")

                setMessage("You win this turn!")
                setPlayer(prev => {
                    return {
                        ...prev,
                        chips: prev.chips + 5
                    }

                })
                setCurrentCard([])
                setIsAlive(false)
            } else if (dealersumace >= sum && dealersumace >= sumAce) {
                console.log('lost here 1')
                setMessage("You lost this turn!")
                setPlayer(prev => {
                    return {
                        ...prev,
                        chips: prev.chips - 5
                    }

                })
                setCurrentCard([])
                setIsAlive(false)
            }
        } else {
            console.log("dealer does not have ace")
            console.log("final dealer sum :" + dealersum)
            console.log("final dealer sum with ace:" + dealersumace)
            console.log("final sum : " + sum)
            console.log("final sumace: " + sumAce)
            if (dealersum > 21) {
                console.log("win here 3")

                setMessage("You win this turn!")
                setPlayer(prev => {
                    return {
                        ...prev,
                        chips: prev.chips + 5
                    }

                })
                setCurrentCard([])
                setDealerHasAce(false)
                setIsAlive(false)
            } else if (dealersum < sum || dealersum < sumAce) {
                console.log("win here 4")
                setMessage("You win this turn!")
                setPlayer(prev => {
                    return {
                        ...prev,
                        chips: prev.chips + 5
                    }

                })
                setCurrentCard([])
                setIsAlive(false)
            } else if (dealersum >= sum && dealersum >= sumAce) {
                console.log('lost here 2')
                setMessage("You lost this turn!")
                setPlayer(prev => {
                    return {
                        ...prev,
                        chips: prev.chips - 5
                    }

                })
                setCurrentCard([])
                setIsAlive(false)
            }
        }

    }
    function delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }


    function checkAceValue(array, player) {
        let sum = 0
        let hasAce = false
        for (let j = 0; j < array.length; j++) {
            if (array[j].cardNumber === 'ace') {
                hasAce = true
            }
        }
        if (hasAce) {
            for (let i = 0; i < array.length; i++) {
                if (array[i].cardNumber === 'ace') {
                    if (player === 'player') {
                        setHasAce(true)

                    } else {
                        setDealerHasAce(true)
                    }
                    sum += 11
                } else {
                    sum += array[i].value
                }
            }
        }
        if (sum > 21) {
            sum = 0
            if (player === 'player') {
                setHasAce(false)
            } else {
                setDealerHasAce(false)
            }
        }
        return sum
    }

    const cardSet = cards.map(item =>

        <img
            src={item.url}
            alt={item.alt}
            className={styles.cards}
            key={item.id}
        />
    )

    const dealerCardSet = dealerCards.map(item =>
        <img
            src={item.url}
            alt={item.alt}
            className={styles.cards}
            key={item.id}
        />
    )

    useEffect(() => {
        if (player.chips <= 0) {
            setMessage("You've lost all your money!!")
        }
    }, [player]);

    useEffect(() => {
        if (sumAce === 21) {
            console.log('bj here 3')
            setMessage("You've got Blackjack!")
            setPlayer(prev => {
                return {
                    ...prev,
                    chips: prev.chips + 7.5
                }

            })
            setHasBlackJack(true)
            setIsAlive(false)
            setCurrentCard([])

            console.log("every new game this triggerd: " + sumAce)
        } else if (sum <= 20) {
            setMessage("Knock knock or stay?")
        } else if (sum === 21) {
            console.log('bj here 1')
            setMessage("You've got Blackjack!")
            setPlayer(prev => {
                return {
                    ...prev,
                    chips: prev.chips + 7.5
                }

            })
            setHasBlackJack(true)
            setIsAlive(false)
            setCurrentCard([])

        } else {
            console.log('lost here 3')
            setMessage("Too many!")
            setPlayer(prev => {
                return {
                    ...prev,
                    chips: prev.chips - 5
                }

            })
            setIsAlive(false)
            setCurrentCard([])
        }
    }, [cards]);

    useEffect(() => {
        if(conclude)
        setMessage("Dealer is cheating...")
    }, [conclude]);

    useEffect(() => {
        setMessage('Want to play a round?')
        localStorage.getItem("Player") &&
        setPlayer(JSON.parse(localStorage.getItem("Player")))
    }, []);

    useEffect(() => {
        localStorage.setItem("Player", JSON.stringify(player))
        console.log(isAlive)
    }, [player]);



    return (
        <div className={styles.container}>
            <h1>Blackjack</h1>
            <div className={styles.cardsbox}>
                {dealerCardSet}
            </div>
            <p id="cards-el">
                Dealer's Sum:
                {dealerSum ? dealerSum : ''}
                {dealerHasAce ? `/ ${dealerSumAce}` : ''}
            </p>

            <div className={styles.messageBox}>
                {
                    hasBlackJack &&
                    <span className={styles.bjwin} />
                }
                <h2
                    id={styles['message-el']}
                >
                    {message}
                </h2>
                {
                    hasBlackJack &&
                    <span className={styles.bjwin} />

                }
            </div>


            <div className={styles.cardsbox}>
                {cardSet}
            </div>

            <p id="sum-el">
                Sum:
                {sum ? sum : ""}
                {hasAce ? `/ ${sumAce}` : ''}
            </p>

            {
                !isAlive || hasBlackJack
                    ?
                    <button
                        onClick={() => startGame()}
                        id={styles['startBtn']}
                    >
                        START GAME
                    </button>
                    :
                    ''
            }

            <div className={styles['optionBtn']}>
                {
                    isAlive && !hasBlackJack
                        ?
                        <button
                            onClick={() => newCard()}
                        >
                            NEW CARD
                        </button>
                        :
                        ''
                }
                {
                    isAlive && !hasBlackJack
                        ?
                        <button
                            onClick={() => concludeGame()}
                            disabled={conclude}
                        >
                            STAY
                        </button>
                        :
                        ''
                }
            </div>
            <h3 id="player-el">$: {player.chips}</h3>
        </div>
    )
}