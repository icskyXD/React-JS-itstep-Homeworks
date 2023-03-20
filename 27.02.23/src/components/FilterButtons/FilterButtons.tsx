import React, { Component } from 'react'

interface IFilter {
    filterState: string;
    onFilter: (value: string) => void
}

export default class FilterButtons extends Component<IFilter>{
    
    render() {
        const { filterState } = this.props;
        return(
            <div>
                <input type="button" className={filterState === 'all' ? 'checked': '' } onClick={() => this.props.onFilter('all')} value="all" />
                <input type="button" className={filterState === 'done' ? 'checked': '' } onClick={() => this.props.onFilter('done')} value="Done" />
                <input type="button" className={filterState === 'important' ? 'checked': '' } onClick={() => this.props.onFilter('important')} value="Impotant" />
            </div>
        )
    }
}