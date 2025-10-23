require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


// --- API ENDPOINTS ---

// POST: Creates a new item
app.post('/items', async (req, res) => {
  try {
    const { customer_name, status } = req.body;
    const { data, error } = await supabase
      .from('items')
      .insert([{ customer_name: customer_name, status: status }])
      .select()
      .single();
    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Fetches all items, with optional status filtering
app.get('/items', async (req, res) => {
  try {
    // Get the status from the URL query parameters
    const { status } = req.query;

    // Start building the query
    let query = supabase.from('items').select('*');

    // If a status filter is provided in the URL, add it to the query
    if (status) {
      query = query.eq('status', status);
    }

    // Execute the final query
    const { data, error } = await query;

    if (error) {
      throw error;
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Updates an existing item by its ID
app.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL parameter
    const { status } = req.body; // Get the new status from the request body

    const { data, error } = await supabase
      .from('items')
      .update({ status: status })
      .eq('id', id) // Specifies which row to update
      .select()
      .single();

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Deletes an item by its ID
app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params; // Get the ID from the URL parameter

    const { error } = await supabase
      .from('items')
      .delete()
      .eq('id', id); // Specifies which row to delete

    if (error) throw error;
    // 204 No Content is the standard response for a successful deletion
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Root route for basic server check
app.get('/', (req, res) => {
  res.send('Shoe Wash API is running! Connection to Supabase is ready.');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});