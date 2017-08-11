import { connect } from 'react-redux';
import Home from '../components/Home';
import { onClickCategory, getCategories } from '../actions/categories';
import { onClickSource, getSources } from '../actions/sources';
import { getArticles } from '../actions/articles';

const mapStateToProps = (state) => ({
  categories: state.categories,
  sources: state.sources,
  articles: state.articles,
})

const mapDispatchToProps = (dispatch) => ({
  handleOnClickCategory: (category) => {
    dispatch(onClickCategory(category));
  },
  getCategories: () => {
    dispatch(getCategories());
  },
  handleOnClickSource: (source) => {
    dispatch(onClickSource(source));
  },
  getSources: (category) => {
    dispatch(getSources(category));
  },
  getArticles: (source) => {
    dispatch(getArticles(source));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
