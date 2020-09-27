db.createUser({
	user: "lab",
	pwd: "lab123",
	roles: [
		{
			role: "readWrite",
			db: "TradingModels"
		}
	]
})

config = {
    "_id": "my-mongo-set",
    "members": [
        {
            "_id": 0,
            "host" : "mongo_container:27017"
        }
    ]
}

rs.initiate(config)