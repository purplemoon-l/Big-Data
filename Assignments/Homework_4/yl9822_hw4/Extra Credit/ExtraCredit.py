data = []
with open(‘mongodb-datasets/historical-events.json’) as f:
    for line in f:
        data.append(json.loads(line))
historical_events = db.historical_events
historical_events.insert_many(data)


agg_result= historical_events.aggregate([
  {
    “$addFields”: {
      “conv_year”: {
        “$arrayElemAt”: [ { “$split”: [“$date”, “/”] }, 0]
      }
    }
  },
  {
    “$group”: {
      “_id”: “$conv_year”,
      “count”: {“$sum”: 1}
    }
  }
])
for x in agg_result:
    print(x)