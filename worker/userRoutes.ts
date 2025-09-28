import { Hono } from "hono";
import { Env } from './core-utils';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
    // Add more routes like this. **DO NOT MODIFY CORS OR OVERRIDE ERROR HANDLERS**
    app.get('/api/test', (c) => c.json({ success: true, data: { name: 'this works' }}));
    app.post('/api/contact', async (c) => {
        try {
            const body = await c.req.json();
            console.log('Contact form submission received:', body);
            // In a real application, you would validate the data and send an email or save to a database.
            // For this mock, we just return a success message.
            return c.json({ success: true, message: 'Form submitted successfully!' });
        } catch (error) {
            console.error('Error processing contact form:', error);
            return c.json({ success: false, error: 'Failed to process submission.' }, 500);
        }
    });
}