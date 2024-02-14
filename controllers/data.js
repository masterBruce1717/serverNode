const newData=(req,res)=>{

    res.send([

        {
            Title:
              " The Batman director Matt Reeves talks about including Robin in sequel: 'There may be a really interesting story'",
            CategoryName: "Hollywood",
            PublishedDate: "Dec 10 2022",
            ImageAsset:
              "https://images.hindustantimes.com/img/2022/03/11/550x309/Batman_Robin_1647009013654_1647009026643.jpeg",
            BlogContent:
              " The Batman director Matt Reeves has opened up about the possibility of including the superhero's sidekick Robin in the film's sequel. ",
            Likes: "800",
          },
          {
            Title:
              " The Banshees of Inisherin movie review: Comedy never hurt this good",
            CategoryName: "Hollywood",
            PublishedDate: "Dec 11 2022",
            ImageAsset:
              "https://images.hindustantimes.com/img/2022/12/15/550x309/banshees_of_inisherin_review_1671088142107_1671088142281_1671088142281.webp",
            BlogContent:
              " The Banshees of Inisherin movie review: Colin Farrell, Brendan Gleeson, Kerry Condon and Barry Keoghan round up an excellent cast in this work of ferocious wisdom and wit.",
            Likes: "800",
          },
          {
            Title:
              "Tom Cruise attempts his 'most dangerous stunt' as he jumps off cliff with motorcycle for Mission Impossible 7. Watch",
            CategoryName: "Hollywood",
            PublishedDate: "Dec 10 2022",
            ImageAsset:
              "https://images.hindustantimes.com/img/2022/12/20/550x309/Tom_Cruise_1671510084343_1671510103764_1671510103764.jpg",
            BlogContent:
              "BTS footage shows Tom Cruise preparing for what he calls his ‘most dangerous stunt ever’ – jumping off of a cliff with a motorcycle without any harness for Mission Impossible 7.",
            Likes: "2k",
          },
          {
            Title: " Henry Cavill shares note as DC cancels Superman's return after Wonder Woman 3",
            CategoryName: "Hollywood",
            PublishedDate: "Dec 12 2022",
            ImageAsset:
              "https://images.hindustantimes.com/img/2022/12/15/550x309/henry-cavill_1671076492717_1671076492856_1671076492856.jpg",
            BlogContent:
              "Henry Cavill has announced that he will not be returning as Superman in the Man of Steel sequel. He had a meeting with James Gunn and Peter Safran.",
            Likes: "800",
          },
          {
            Title:
              "Avatar The Way of Water passes $600 million at the global box office, here's how much India contributed",
            CategoryName: "Hollywood",
            PublishedDate: "Dec 10 2022",
            ImageAsset:
              "https://images.hindustantimes.com/img/2022/12/23/550x309/avatar_2_box_office_1671354214454_1671775957106_1671775957106.jpeg",
            BlogContent:
              "In the US the film has grossed $183 million at the box office, with Indian markets contributing at $26.5 million at the midweek pull.",
              Likes:"400",
          }

    ])
}



module.exports.getData = newData