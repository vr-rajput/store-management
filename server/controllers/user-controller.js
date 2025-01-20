const userRepository = require('../dao/user-Repository');
const userCreate = async (req, res) => {
  try {
    const { storeName, userName, email, password, address, number } = req.body;
    const userInfo = {
      storeName,
      userName,
      email,
      password,
      address,
      number
    }
    await userRepository.createUser(userInfo)
    res.status(201).json({ message: "user Created successfull !" })
  } catch (error) {
    console.log('Error', error.message)
    res.status(401).json({ message: "user dose not created " })
  }
}

module.exports = userCreate;