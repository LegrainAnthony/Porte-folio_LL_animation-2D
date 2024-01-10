import { ContactContainer, TitleContainer, CvContainer, DownloadButton } from "./Contact.style";
import { useEffect } from "react";
import { Image } from "antd";
import PageTitle from "../../components/Title/PageTitle";

const Contact = ({ getTheCurrentPage, is3020 }) => {
	useEffect(() => {
		getTheCurrentPage();
	}, []);

	//
	//
	// </ul>
	return (
		<ContactContainer>
			<div className="wave__container">
				<img className="wave" src={"svg/header_wave.svg"} />
			</div>
			<TitleContainer>
				<PageTitle>
					<h2 className="title">Mon CV</h2>
				</PageTitle>
				<DownloadButton>
					<a className="download__link" href="pdf/CV_2024.pdf" download="Louise_Levasseur_CV_2024.pdf">
						Télécharger mon CV
					</a>
				</DownloadButton>
				<DownloadButton>
					<a
						className="download__link"
						href="pdf/Recommandation_-ENCLUME_ANIMATION-_Louise_LEVASSEUR.pdf"
						download="Recommandation_-ENCLUME_ANIMATION-_Louise_LEVASSEUR.pdf"
					>
						Télécharger ma lettre de recommandation
					</a>
				</DownloadButton>
			</TitleContainer>
			<CvContainer>
				<Image lazy src="images/cv/CV_2023.png" className="image" />
			</CvContainer>
		</ContactContainer>
	);
};

export default Contact;
