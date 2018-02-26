
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Song = Backbone.Model.extend({
  initialize() {
    console.log('a new song');
  },
  validate(attrs) {
    if (!attrs.title) {
      return 'Title is required!';
    }
    return
  }
  // defaults: { genre: 'Jazz'  },
});

const song = new Song();

// song.set('title', 'Blue in Green');
// song.set({ artist: 'Miles Davis'  });
