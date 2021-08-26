using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using blogger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using MongoDB.Driver;

namespace blogger.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostController : ControllerBase
    {

        private readonly IConfiguration _configuration;

        public PostController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("BlogApp"));
            var dbList = dbClient.GetDatabase("blog").GetCollection<post>("posts").AsQueryable();
            return new JsonResult(dbList);
        }

        [HttpPost]
        public JsonResult Post(post NewPost)
        {

            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("BlogApp"));
            var LastPostId = dbClient.GetDatabase("blog").GetCollection<post>("posts").AsQueryable().Count();
            NewPost.postNumber = LastPostId + 1;
            dbClient.GetDatabase("blog").GetCollection<post>("posts").InsertOne(NewPost);
            return new JsonResult("Post Added Successfuly");
        }

        [HttpPut]
        public JsonResult Put(post NewPost)
        {

            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("BlogApp"));

            var filter = Builders<post>.Filter.Eq("postNumber", NewPost.postNumber);
            var updateTitle = Builders<post>.Update.Set("title", NewPost.title);
            var updateAuthor = Builders<post>.Update.Set("author", NewPost.author);
            var updateContent = Builders<post>.Update.Set("content", NewPost.content);
            var updateDate = Builders<post>.Update.Set("date", NewPost.publishedAt);

            dbClient.GetDatabase("blog").GetCollection<post>("posts").UpdateOne(filter, updateTitle);
            dbClient.GetDatabase("blog").GetCollection<post>("posts").UpdateOne(filter, updateAuthor);
            dbClient.GetDatabase("blog").GetCollection<post>("posts").UpdateOne(filter, updateContent);
            dbClient.GetDatabase("blog").GetCollection<post>("posts").UpdateOne(filter, updateDate);
            return new JsonResult("Post Updated Successfuly");
        }

        [HttpDelete ("{postNumber}")]
        public JsonResult Delete(int postNumber)
        {

            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("BlogApp"));

            var filter = Builders<post>.Filter.Eq("postNumber", postNumber);
          
            dbClient.GetDatabase("blog").GetCollection<post>("posts").DeleteOne(filter);
            return new JsonResult("Post Deleted Successfuly");
        }
    }
}

