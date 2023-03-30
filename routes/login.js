module.exports = {

   

    login: (req, res) => {
       
        

        let userQuery = "SELECT * FROM users;";

        db.query(userQuery, function (err, result) {
            if (err) {
                return res.status(500).send(err);
            }
            if (!result || !result.length) {

                return res.status(200).send({ message: "User does not exist" });
            } else {
                const row = result[0];
                
                    return res.status(200).send({
                        message: "Login success",
                        userName: row.userName,
                        user_id: row.user_id,
                        email: row.email_id,
                        mobileNumber: row.mobileNumber,
                        AccessToken: row.AccessToken,
                    });
                
            }
        });
    },

    

};


