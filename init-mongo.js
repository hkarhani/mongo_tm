db.createUser({
	user: "user",
	pwd: "pass",
	roles: [
		{
			role: "readWrite",
			db: "db_name"
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
