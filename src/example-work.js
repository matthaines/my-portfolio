import React from 'react';
import { ExampleWorkModal } from './example-work-modal';

class ExampleWork extends React.Component {

  constructor(props) {
    super(props);
    // Establish state to be used in the ExampleWorkModal class.
    // We hold the state here, in the class that invokes ExampleWorkModal
    // so that it is maintained across invocations.
    this.state = {
      'modalOpen': false,
      'selectedExample': this.props.work[0]
    };
    // a bit of bookeeping needed to modify state in these functions
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(evt, example) {
    this.setState({   // outside of the constructor, use setState() to change state
      'modalOpen': true,
      'selectedExample': example
    });
  }

  closeModal(evt, example) {
    this.setState({   // outside of the constructor, use setState() to change state
      'modalOpen': false
      // we don't care about the example when we're closing the modal
    });
  }

  render() {
    return (
      // use span to contain both of these items into a single JSX tag
      <span>
        <section className="section section--alignCentered section--description">
        { this.props.work.map( (example, idx) => {
            return (
              // pass the openModal function into the workBubble so that it
              // can manipulate it if the correct div is clicked-on
              <ExampleWorkBubble example={example} key={idx}
                openModal={this.openModal}/>
            )
          })
        }
        </section>
        // Now that we have state, we pass it along to ExampleWorkModal
        <ExampleWorkModal example={this.state.selectedExample}
          open={this.state.modalOpen} closeModal={this.closeModal}/>
      </span>
    )
  }
}


class ExampleWorkBubble extends React.Component {
  render() {
    let example = this.props.example;
    return (
      // notice the syntax to create an anonymous function for passing
      // both event and example to the openModal function
      <div className="section__exampleWrapper"
        onClick={ (evt) => this.props.openModal(evt, example) }>
        <div className="section__example">
          <img alt={ example.image.desc }
               className="section__exampleImage"
               src={ example.image.src }/>
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              { example.title }
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default ExampleWork;
export { ExampleWorkBubble };
