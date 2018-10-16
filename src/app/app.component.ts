import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Activity One';

  posts = [
    {
      title: 'Mon premier Post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras risus diam, molestie dapibus nulla quis, facilisis luctus felis. Aenean sit amet risus ipsum. Aliquam ligula sapien, dictum ac bibendum vehicula, tincidunt quis augue. Etiam suscipit diam nisl. Vestibulum at eros eu urna vestibulum placerat in a ex. Proin vitae odio fermentum, pharetra augue a, malesuada eros. Nam vestibulum malesuada pharetra.',
      create_at: new Date('2016-12-17T03:24:00'),
      loveIts: 0
    },
    {
      title: 'Un deuxième Post',
      content: 'Morbi porttitor porta suscipit. Nunc sit amet dictum purus. Ut in arcu pellentesque, tincidunt massa nec, egestas neque. Vestibulum ultricies euismod turpis sed tempor. Nunc a purus diam. Aliquam scelerisque pretium metus vitae fermentum. Mauris suscipit, sapien et aliquam blandit, velit magna auctor nunc, sit amet euismod augue lectus at augue. Suspendisse dignissim fermentum erat non ultrices. Aliquam ligula diam, placerat et faucibus sed, efficitur vel sapien. Sed et aliquet nisi.',
      create_at: new Date(),
      loveIts: 0
    },
    {
      title: 'Ceci est un autre Post',
      content: 'Ut ac dapibus arcu, eu consectetur nunc. Sed dictum gravida metus, eu dapibus augue dictum eu. Nam quis ipsum rhoncus, iaculis risus aliquam, ultricies elit. Vivamus metus odio, placerat eu sem quis, feugiat feugiat odio. Morbi eros tellus, gravida vitae pharetra sed, finibus ac nibh. Curabitur non nisl feugiat, dapibus sapien et, viverra ante. Aliquam dictum orci sit amet nibh dapibus, porta euismod sapien ornare. Quisque tristique orci dictum eros euismod, ut placerat risus lacinia. Sed quis pellentesque odio. Praesent ante elit, pharetra sed volutpat non, auctor vitae ligula. Aenean neque velit, finibus sed dapibus at, ornare vel magna. Cras at urna bibendum, facilisis turpis eu, auctor mauris. Vivamus nisi orci, iaculis eu turpis at, bibendum maximus eros.',
      create_at: new Date(),
      loveIts: 0
    }
  ];

}
