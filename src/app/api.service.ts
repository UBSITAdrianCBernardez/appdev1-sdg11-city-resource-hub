import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      map((posts) =>
        posts.map((post, index) => ({
          ...post,
          title: this.englishTitles[index % this.englishTitles.length],
          body: this.englishBodies[index % this.englishBodies.length]
        }))
      )
    );
  }

  private readonly englishTitles = [
    'Community Resource Update',
    'Emergency Preparedness Information',
    'Local Shelter and Support Services',
    'Public Safety Reminder',
    'Sustainable City Planning Update'
  ];

  private readonly englishBodies = [
    'This resource provides helpful information for residents who need access to local community services.',
    'Residents are encouraged to review preparedness steps and know the nearest support locations in their area.',
    'This update highlights available shelters, assistance centers, and community support options.',
    'The city continues to promote safer, cleaner, and more accessible spaces for all residents.',
    'This information supports SDG 11 by helping communities become more inclusive, resilient, and sustainable.'
  ];
}
