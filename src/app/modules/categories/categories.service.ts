import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first, take } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { convertSnaps } from '@core/services/db-utils';
import { Category } from '@shared/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private db: AngularFirestore) { }

  loadAllCategories(): Observable<Category[]> {
    return this.db.collection('categories',
      // ref => ref.orderBy('seqNo')
      // ref => ref.where('seqNo', '==', 5)
      //   .where('lessonsCount', '>=', 10)
      // ref => ref.where('seqNo', '>=', 5)
      // .where('lessonsCount', '==', 10)

      // estos 2 where requiere crear un indice compuesto y la url la obtengo de la consola de chrome
      // ref.orderBy('seqNo')
      // .where('categories', 'array-contains', 'BEGINNER')

      // .where('seqNo', '>', 0)
      // .where('seqNo', '<=', 4)
      // .startAt(0)
      // .startAfter(0)
      // .endAt(3)

    )
      .snapshotChanges()
      .pipe(
        map(snaps => {
          return convertSnaps<Category>(snaps);
          // return snaps.map(snap => {
          //   return <Category>{
          //     id: snap.payload.doc.id,
          //     ...snap.payload.doc.data() as {}
          //   };
          // });
        }), first()); // o take(1)
  }
  // Partial permite que no todas las propiedades sean obligatorias de pasar
  saveCategory(categoryId: string, changes: Partial<Category>): Observable<any> {
    // si el documento existe usamos update si no existe usamos set
    // from: transforma la promesa en un observable
    return from(this.db.doc(`categories/${categoryId}`).update(changes));
  }
}
