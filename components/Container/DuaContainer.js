import React, { Component } from 'react'
import {Card, Col, Input, Row} from 'antd';
import css from'./DuaContainer.css'


const Search = Input.Search;

export default class DuaWrapper extends Component {
    state = {
        duas: [
            {
                // id:undefined,
                title: 'Nermin',
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!"
                // category: undefined,
                // source: undefined,
                // chain: undefined
            },
            {
                // id:undefined,
                title: 'Eso Ibada',
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!"
                // category: undefined,
                // source: undefined,
                // chain: undefined
            },
            {
                // id:undefined,
                title: 'Shalilalalaj',
                body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, iusto!"
                // category: undefined,
                // source: undefined,
                // chain: undefined
            },
            {
                // id:undefined,
                title: 'Sumeja',
                body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, aperiam?"
                // category: undefined,
                // source: undefined,
                // chain: undefined
            }
        ]
    }

    // onHandleSearch(e){
    //     const text = e.target.value.toLowerCase();

    //     document.querySelectorAll('.collection-item').forEach(function(task){
    //         const item = task.innerText.toLowerCase();
    //         if(item.indexOf(text) != -1){
    //             task.style.display = 'block';
    //         } else {
    //             task.style.display = 'none';
    //         }
    //     })
    // }


    render() {
        const duas = this.state.duas;
        const novo = duas.map((item,index)=>{
            return (
                <Duas key={index} title={item.title} content={item.body}/>
            )
        })
        return (
            <React.Fragment>
                        <InputField duas={this.state.duas} onChange={this.onHandleChange}/>
            </React.Fragment>
        )
    }
}


class InputField extends Component {
    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this);
        this.state = {
            results: []
        }
    }

    onHandleChange(e) {
        const duas = this.props.duas;
        const results = duas.filter(dua => {
            const regex = new RegExp(e.target.value, 'gi')
            return dua.title.match(regex) || dua.body.match(regex)
        })
        this.setState({  results  })
        console.log(results);
    }

  render() {
    return (
      <div>
      <Row className={css.test}>
      <Col span={8} offset={8}>
                  <Search
                placeholder="input search text"
                enterButton="Search Duas"
                size="large"
                onChange={this.onHandleChange}
            />
      </Col>
    </Row>
<Row >
<Col >
    {this.state.results && this.state.results.map(result => <Duas title={result.title} content={result.body} />)}
</Col>
</Row>

      </div>
    )
  }
}

const Duas = props => {
    return (
        <Col lg={{ span: 5 }} className={css.test}>
            <Row>
                <Card title={props.title} style={{ width: 300 }} >
                    <p>{props.content}</p>
                </Card>
            </Row>

        </Col>

    );
};



