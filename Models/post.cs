using MongoDB.Bson.Serialization.Attributes;
using System;

namespace blogger.Models
{
    public class post
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("postNumber")]
        public int postNumber { get; set; }

        [BsonElement("title")]
        public string title { get; set; }
        [BsonElement("description")]
        public string description { get; set; }

        [BsonElement("author")]
        public string author { get; set; }

        [BsonElement("content")]
        public string content { get; set; }

        [BsonElement("urlToImage")]
        public string urlToImage { get; set; }
        [BsonElement("url")]
        public string url { get; set; }

        [BsonElement("publishedAt")]
        public string publishedAt { get; set; }
    }
}