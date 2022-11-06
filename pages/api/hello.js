export default function handler(req, res) {
  console.log('A veeeeeeeer');
  res.status(200).json({ text: 'Hello my friend' });
}
