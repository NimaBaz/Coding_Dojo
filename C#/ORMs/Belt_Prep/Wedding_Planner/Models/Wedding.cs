#pragma warning disable CS8618

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Wedding_Planner.Models;

public class Wedding
{
    [Key]
    
    public int WeddingId { get; set; }

    [Display(Name = "Wedder One: ")]
    [Required(ErrorMessage = "Please enter first wedder name")] 
    [MinLength(2, ErrorMessage = "Product name must be at least 2 characters long")]
    public string WedderOne { get; set; }

    [Display(Name = "Wedder Two: ")]
    [Required(ErrorMessage = "Please enter second wedder's name")] 
    [MinLength(2, ErrorMessage = "Product name must be at least 2 characters long")]
    public string WedderTwo { get; set; }

    [DataType(DataType.Date)]
    [Required(ErrorMessage = "Please enter your date of birth")]
    [DisplayFormat(DataFormatString = "{0:MM-dd-yyyy}", ApplyFormatInEditMode = true)]
    [Display(Name = "Date: ")]
    [DateValidation]
    public DateTime WeddingDate {get;set;}

    [Required]
    [Display(Name = "Address: ")]
    
    public string Address { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    // This is the ID we will use to know which User made the post
    // This name should match the name of the key from the User table (UserId)
    [Required]
    [Display(Name = "User")]
    public int UserId { get; set; }

    // Our navigation property to track which User made this Post
    public User? User { get; set; }

    public List<Association> AllAssociations { get; set; } = new List<Association>();

    public List<RSVPWedding> AllRSVPWeddings { get; set; } = new List<RSVPWedding>();

}