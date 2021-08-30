exports.returnName = (req, res) => {
    returnString = "ni imena";
    if (req.params.name != undefined) { // če je get parameter name definiran
        returnString = `Hello ${req.params.name}`;
    } 
    res.json({ msg: returnString });
};
