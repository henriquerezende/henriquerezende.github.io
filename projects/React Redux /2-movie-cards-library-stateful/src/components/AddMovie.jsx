import React from 'react';

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.createInput = this.createInput.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
  }

  handleChangeInput({ target: { value } }, name) {
    this.setState({ [name]: value });
  }

  handleChangeRating({ target: { value } }, name) {
    this.setState({ [name]: +value });
  }

  createInput(inputName, text, inputType = 'text', handler = this.handleChangeInput) {
    const st = this.state;
    return (
      <label htmlFor={inputName}>
        {text}
        <input
          type={inputType}
          name={inputName}
          id={inputName}
          value={st[inputName]}
          onChange={(e) => handler(e, inputName)}
        />
      </label>
    );
  }

  selectGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={(e) => this.handleChangeInput(e, 'genre')}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    const { storyline } = this.state;
    return (
      <form>
        {this.createInput('title', 'Título')}
        {this.createInput('subtitle', 'Subtítulo')}
        {this.createInput('imagePath', 'Imagem')}
        <label htmlFor="input">
          Sinopse
          <textarea value={storyline} onChange={(e) => this.handleChangeInput(e, 'storyline')} />
        </label>
        {this.createInput('rating', 'Avaliação', 'number', this.handleChangeRating)}
        {this.selectGenre()}
        <button
          type="button"
          value="Adicionar filme"
          onClick={() => {
            onClick(this.state);
            this.setState(initialState);
          }}
        >
        Adicionar filme
        </button>
      </form>
    );
  }
}
