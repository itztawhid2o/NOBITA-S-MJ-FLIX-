const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// BetsAPI থেকে লাইভ স্পোর্টস ডেটা ফেচ করার এন্ডপয়েন্ট
app.get('/live-sports', async (req, res) => {
  try {
    const response = await axios.get('https://betsapi2.p.rapidapi.com/v1/bet365/inplay_filter?sport_id=1', {
      headers: {
        'x-rapidapi-host': 'betsapi2.p.rapidapi.com',
        'x-rapidapi-key': '96fb901675msh8dbf4e87451bcadp1a1520jsn770aafb7e1d7'
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from BetsAPI');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
