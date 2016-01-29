#!/usr/bin/env bash
aws s3 sync dist s3://debijlesformule.nl --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers