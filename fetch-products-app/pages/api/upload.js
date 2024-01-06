import multer from 'multer';

const upload = multer({ dest: 'uploads/' }); // Define the upload destination directory.

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            upload.single('file')(req, res, (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'File upload failed' });
                }

                const { file } = req;
                if (!file) {
                    return res.status(400).json({ message: 'No file provided' });
                }

                // Handle the uploaded file (e.g., save it to a database, process it, etc.).

                return res.status(200).json({ message: 'File uploaded successfully' });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'An error occurred' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

// FIXME: Upload Image not working