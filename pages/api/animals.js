function animals(req,res) {
    const animals =  ['cat','dog', 'lizard', 'capybara', 'ostrich','pangolin', 'bull', 'guinea pig','penguins', 'armadillo']

    const random = animals[Math.floor(Math.random()* animals.length)]

    res.status(200).json({random})
}

export default animals;