import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectControl from './../Components/SelectControl';
import { updateSort } from './../Redux/Actions/Filter';

const sortBy = ["Default", "Name", "Price", "Date"];
const pageSizes = [9 , 18, 36];

class Filter extends Component {

    static propTypes = {
        updateSort: PropTypes.func.isRequired,
        sortOption: PropTypes.string.isRequired,
        handlePageSizeChange : PropTypes.func.isRequired,
        pageSize: PropTypes.number
    }

    state = {
        pageSize : 9
    }

    handlePageSizeChange(e) {
        this.setState({
            pageSize: e.target.value
        });
        this.props.handlePageSizeChange(e.target.value);
    }


    handleSort = e =>  {
        this.props.updateSort(e.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <div className="aa-product-catg-head-left">
                    <div className="aa-sort-form">
                        <label >Sort by</label>
                        <SelectControl options={sortBy} controlFunc={this.handleSort} selectedOption={this.props.sortOption} />
                    </div>
                    <div className="aa-show-form">
                        <label >Show</label>
                        <SelectControl options={pageSizes} controlFunc={this.handlePageSizeChange.bind(this)} selectedOption={String(this.state.pageSize)} />
                    </div>
                </div>  
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    sortOption: state.filter.sortOption
  });

export default connect(
    mapStateToProps,
    { updateSort }
  )(Filter);
  