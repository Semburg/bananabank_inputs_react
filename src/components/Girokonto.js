import React, { Component } from 'react';

class Girokonto extends Component {


    state = {
        number: 0,
        sum: 0,

        balance:0

    }

    textInput = React.createRef()


    addAmount = (event) => {
        console.log("add amount")
        console.log(this.number);

        // setState(this.sum=this.number)
        console.log(this.sum);
        
        
        event.preventDefault()

    }
    takeAmount = (event) => {
        console.log("take amount - show this.sum from ref:")
        console.log(this.sum)
        console.log("take amount")
        console.log(this.number);
        console.log("result:");
        let balance = 0
        balance=Number(this.balance + this.sum)
        console.log(balance+this.sum);

        let newAmount = this.number

        this.number = this.number - newAmount

        event.preventDefault()

    }

    showInput = (event) => {
        console.log(event.target.value);
        console.log(Number(this.textInput.current.value));
        this.sum = Number(this.textInput.current.value)
            console.log(this.sum);

        let amount = event.target.value
        this.number = Number(amount)

        console.log(amount);
    }
    render() {
        return (
            <>
                <h1 id="title">Banana Bank</h1>

                <section className="konto">
                    <h2>Dein Girokonto</h2>
                    <h1 className="saldo">0</h1>
                    <form>

                        <input type="number" className="geldbetrag" placeholder="Gib einen Geldbetrag ein" onInput={this.showInput} ref={this.textInput} />
                        <br />
                        <button className="einzahlen" onClick={this.addAmount} >Einzahlen</button>
                        <button className="auszahlen" onClick={this.takeAmount}>Auszahlen</button>
                    </form>
                    <section>
                        <h2>Input</h2>
                        <input type="text" name="" id=""/>
                    </section>
                </section>
            </>
        );
    }
}

export default Girokonto;