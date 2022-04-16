import styled from 'styled-components';
import PropTypes from 'prop-types'

export const FlexContainer = styled.div`
    width: 100%;
    flex-direction: ${props => props.flexDirection || "column"};
    text-align: center;
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justifyContent || "center"};
`;

FlexContainer.propTypes = {
    flexDirection: PropTypes.oneOf([
        'row',
        'row-reverse',
        'column',
        'column-reverse'
    ]),
    alignItems: PropTypes.oneOf([
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'self-start',
        'self-end'
    ]),
    justifyContent: PropTypes.oneOf([
        'center',
        'space-between',
        'space-around',
        'flex-start',
        'flex-end'
    ]),
}

export default FlexContainer