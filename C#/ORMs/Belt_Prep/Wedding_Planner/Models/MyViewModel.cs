#pragma warning disable CS8618

namespace Wedding_Planner.Models;

public class MyViewModel
{
    public User User { get; set; }
    
    public List<User> AllUsers { get; set; }

    public Wedding Wedding { get; set; }

    public List<Wedding> AllWeddings { get; set; }

    public Association Association { get; set; }

    public List<Association> AllAssociations { get; set; }

    public RSVPWedding RSVPWedding { get; set; }

    public List<RSVPWedding> AllRSVPWeddings { get; set; }
}