export default function handler(req, res) {
    if (req.method === 'POST') {
      const formData = JSON.parse(req.body);
  
      // Process the form data (e.g., save to a database)
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }