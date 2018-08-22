S3_BUCKET="ngaas-test"
STACK_NAME="ngaas-test"
TEMPLATE_FILE="template.yaml"
OUTPUT_TEMPLATE_FILE="packaged-template.yaml"

aws cloudformation package --template-file $TEMPLATE_FILE --s3-bucket $S3_BUCKET --output-template-file $OUTPUT_TEMPLATE_FILE
aws cloudformation deploy --template-file "./$OUTPUT_TEMPLATE_FILE" --stack-name $STACK_NAME --capabilities CAPABILITY_IAM

rm $OUTPUT_TEMPLATE_FILE