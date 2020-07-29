import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'

class PageFramework extends Component {
    render() {
        return(
            <Grid columns={2} rows={2}>
                <Grid.Row>
                    <Grid.Column>
                        <div>Search history</div>
                    </Grid.Column>
                    <Grid.Column>
                        <div>Tweet Map</div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                    </Grid.Column>
                    <Grid.Column>
                        <div>Search filters</div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default PageFramework 


