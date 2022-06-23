import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService  } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(
    private meesageService: MessageService,
    private htttp: HttpClient) { }
  getHeroes() : Observable <Hero[]>{
    return this.htttp.get<Hero[]>(this.heroesUrl);
  }
  getHero(id: number): Observable<Hero | undefined>{
    this.meesageService.add(`Hero Service: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  private log(message: string){
    this.meesageService.add("Hero Service: fetched heroes");
  }
}
