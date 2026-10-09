


export const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // Gate open! Agle controller par jao
  } else {
    res.status(403).json({ message: 'Access denied. Only Admins can perform this action.' });
  }
};