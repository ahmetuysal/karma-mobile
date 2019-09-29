import { Component, OnInit } from '@angular/core';
import { Team } from 'src/contract';
import { Courses } from 'src/contract';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  newTeams: Team[];
  newCourses: Courses[];
  ongoingCourses: Courses[];

  constructor() { }

  ngOnInit() {
    this.newTeams = [
      {
        title: 'Karma',
        ranking: 1,
        logo: '../../assets/evler/ev_1.png',
        term: "10-24 Eylül 2019"
      },
      {
        title: 'Hayalet',
        ranking: 2,
        logo: '../../assets/evler/ev_4.png',
        term: "31 Temmuz-13 Ağustos 2019"
      },
      {
        title: 'Böcük',
        ranking: 5,
        logo: '../../assets/evler/ev_3.png',
        term: "17-31 Temmuz 2019"
      },
      {
        title: 'Hızlı ve Öfkeli',
        ranking: 15,
        logo: '../../assets/evler/ev_2.png',
        term: "27 Ağustos-10 Eylül 2019"
      },
      {
        title: 'Kampüs',
        ranking: 9,
        logo: '../../assets/evler/ev_5.png',
        term: "19 Haziran - 3 Temmuz 2019"
      }
    ]
    this.ongoingCourses = [
      {
        title: 'İngilizce Eğitimi',
        completed_at: '21 Haziran 2019',
        logo: 'paper-plane'
      },
      {
        title: 'Sörf Eğitimi',
        completed_at: '15 Eylül 2019',
        logo: 'cloudy-night'
      },
    ]
    this.newCourses = [
      {
        title: 'Powerpoint Eğitimi',
        completed_at: '21 Eylül 2019',
        logo: 'aperture'
      },
      {
        title: 'Makine Eğitimi',
        completed_at: '12 Haziran 2019',
        logo: 'cog'
      },
      {
        title: 'Satranç Eğitimi',
        completed_at: '15 Ağustos 2019',
        logo: 'square-outline'
      }
    ]
  }

}
