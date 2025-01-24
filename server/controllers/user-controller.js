const userRepository = require('../dao/user-Repository');
const { keyword } = require('../utils/keyword');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userCreate = async (req, res) => {
  try {
    console.log("admin")
    const { storeName, userName, email, password, address, number } = req.body;
    const user = await userRepository.getBuyEmail({ storeName, email });
    if (user) {
      return res.status(200).json({ message: keyword?.auth?.allready })
    }
    const userPassword = await bcrypt.hash(password, saltRounds);
    const userInfo = {
      storeName,
      userName,
      email,
      password: userPassword,
      address,
      number
    }
    await userRepository.createUser(userInfo)
    return res.status(201).json({ message: keyword?.auth?.register })
  } catch (error) {
    console.log('Error', error)
    return res.status(401).json({ message: keyword?.error })
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password, storeName } = req.body;
    console.log(email, password, storeName)
    const user = await userRepository.getByStore(storeName, email);
    console.log(user?.dataValues)
    if (!user?.dataValues) {
      return res.status(401).json({ message: keyword?.auth?.invalidCred })
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: keyword?.auth?.isverify })
    }
    return res.status(200).json({ message: keyword?.auth?.login })
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: keyword?.error })
  }
}

module.exports = { userCreate, loginUser };