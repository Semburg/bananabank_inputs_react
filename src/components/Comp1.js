import React from 'react';

class Comp1 extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            currentAmount:0
        }
        this.myRef = React.createRef();
    }

    addAmount = (event) => {
        console.log(this.state.currentAmount);
        let currentCount = this.state.currentAmount;
        currentCount = Number(this.state.currentAmount + this.state.count)
        this.setState({count: currentCount})
        
        event.preventDefault()


    }
    takeAmount = (event) => {
        console.log(this.state.currentAmount);
        let currentCount = this.state.currentAmount;
        currentCount = Number(this.state.count - this.state.currentAmount)
        this.setState({count: currentCount})
        event.preventDefault()

    }

    showInput = (event) => {
        console.log(Number(event.target.value))
        this.setState({currentAmount: Number(event.target.value)})

        
    }


    
    render() {
        return (
            <>
                <h1 id="title">Banana Bank</h1>

                <section className="konto">
                    <h2>Dein Girokonto</h2>
                    <h1 className="saldo">{this.state.count}</h1>
                    <form>

                        <input type="number" className="geldbetrag" placeholder="Gib einen Geldbetrag ein" onInput={this.showInput} ref={this.textInput} />
                        <br />
                        <button className="einzahlen" onClick={this.addAmount} >Einzahlen</button>
                        <button className="auszahlen" onClick={this.takeAmount}>Auszahlen</button>
                    </form>
                </section>
            </>
        );
    }
}

export default Comp1;