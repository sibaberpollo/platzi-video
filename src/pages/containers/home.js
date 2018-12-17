import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modalContainer';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error'

class Home extends Component {	
	state = {
		modalVisible: false,
	}
	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		});
	}

	handleOpenModal = (event) => {
		this.setState({
			modalVisible: true,
		});
	}
	render() {
		//console.log(this.props.data.categories);
		return(
			<HandleError>
				<HomeLayout>
					<Related />
					<Categories 
						categories={this.props.data.categories} 
						handleOpenModal={this.handleOpenModal} 
					/>
					{
						this.state.modalVisible &&
						<ModalContainer>
							<Modal handleClick={this.handleCloseModal} >
								<h1>Mimo</h1>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>			
		)
	}
}

export default Home;