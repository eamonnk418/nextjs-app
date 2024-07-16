"use client";

import { Button } from "@zendeskgarden/react-buttons";
import { Field, Input } from "@zendeskgarden/react-forms";
import { Grid } from "@zendeskgarden/react-grid";
import { XXL } from "@zendeskgarden/react-typography";

export const ReportForm = () => {
  const {} = useform
  return (
    <Grid>
      <Grid.Row>
        <Grid.Col>
          <XXL>Report Form</XXL>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col>
          <Field>
            <Field.Label>GitHub URL</Field.Label>
            <Input type="text" name="githubURL" id="githubURL" />
          </Field>
        </Grid.Col>
        <Grid.Col>
          <Field>
            <Field.Label>Description</Field.Label>
            <Input type="text" name="description" id="description" />
          </Field>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col>
          <Button type="submit">Submit</Button>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
};
