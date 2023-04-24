#pragma warning disable CS8618

namespace ArtStagram.Models;

public class MyViewModel
{
    public User User { get; set; }
    
    public List<User> AllUsers { get; set; }

    public Post Post { get; set; }

    public List<Post> AllPosts { get; set; }

    public UserPost UserPost { get; set; }

    public List<UserPost> AllUserPosts { get; set; }

}