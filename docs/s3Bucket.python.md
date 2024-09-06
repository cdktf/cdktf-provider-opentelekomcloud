# `s3Bucket` Submodule <a name="`s3Bucket` Submodule" id="@cdktf/provider-opentelekomcloud.s3Bucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Bucket <a name="S3Bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket opentelekomcloud_s3_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3Bucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl: str = None,
  arn: str = None,
  bucket: str = None,
  bucket_prefix: str = None,
  cors_rule: typing.Union[IResolvable, typing.List[S3BucketCorsRule]] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  hosted_zone_id: str = None,
  id: str = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]] = None,
  logging: typing.Union[IResolvable, typing.List[S3BucketLogging]] = None,
  policy: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  versioning: S3BucketVersioning = None,
  website: S3BucketWebsite = None,
  website_domain: str = None,
  website_endpoint: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#acl S3Bucket#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#arn S3Bucket#arn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.logging">logging</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]]</code> | logging block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#policy S3Bucket#policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#region S3Bucket#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | website block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.websiteDomain">website_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.websiteEndpoint">website_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.acl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#acl S3Bucket#acl}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#arn S3Bucket#arn}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#bucket S3Bucket#bucket}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.bucketPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.corsRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#cors_rule S3Bucket#cors_rule}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}.

---

##### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.hostedZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.lifecycleRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.logging"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#logging S3Bucket#logging}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.policy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#policy S3Bucket#policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#region S3Bucket#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#tags S3Bucket#tags}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.versioning"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#versioning S3Bucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.website"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website S3Bucket#website}

---

##### `website_domain`<sup>Optional</sup> <a name="website_domain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.websiteDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}.

---

##### `website_endpoint`<sup>Optional</sup> <a name="website_endpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.websiteEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putCorsRule">put_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLifecycleRule">put_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning">put_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite">put_website</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucketPrefix">reset_bucket_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetCorsRule">reset_cors_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetHostedZoneId">reset_hosted_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLifecycleRule">reset_lifecycle_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetPolicy">reset_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetVersioning">reset_versioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsite">reset_website</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteDomain">reset_website_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteEndpoint">reset_website_endpoint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cors_rule` <a name="put_cors_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putCorsRule"></a>

```python
def put_cors_rule(
  value: typing.Union[IResolvable, typing.List[S3BucketCorsRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putCorsRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

---

##### `put_lifecycle_rule` <a name="put_lifecycle_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLifecycleRule"></a>

```python
def put_lifecycle_rule(
  value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLifecycleRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLogging"></a>

```python
def put_logging(
  value: typing.Union[IResolvable, typing.List[S3BucketLogging]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLogging.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]]

---

##### `put_versioning` <a name="put_versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning"></a>

```python
def put_versioning(
  enabled: typing.Union[bool, IResolvable] = None,
  mfa_delete: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#enabled S3Bucket#enabled}.

---

###### `mfa_delete`<sup>Optional</sup> <a name="mfa_delete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning.parameter.mfaDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#mfa_delete S3Bucket#mfa_delete}.

---

##### `put_website` <a name="put_website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite"></a>

```python
def put_website(
  error_document: str = None,
  index_document: str = None,
  redirect_all_requests_to: str = None,
  routing_rules: str = None
) -> None
```

###### `error_document`<sup>Optional</sup> <a name="error_document" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite.parameter.errorDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#error_document S3Bucket#error_document}.

---

###### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite.parameter.indexDocument"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#index_document S3Bucket#index_document}.

---

###### `redirect_all_requests_to`<sup>Optional</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite.parameter.redirectAllRequestsTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}.

---

###### `routing_rules`<sup>Optional</sup> <a name="routing_rules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite.parameter.routingRules"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}.

---

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_bucket` <a name="reset_bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_bucket_prefix` <a name="reset_bucket_prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucketPrefix"></a>

```python
def reset_bucket_prefix() -> None
```

##### `reset_cors_rule` <a name="reset_cors_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetCorsRule"></a>

```python
def reset_cors_rule() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_hosted_zone_id` <a name="reset_hosted_zone_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetHostedZoneId"></a>

```python
def reset_hosted_zone_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_lifecycle_rule` <a name="reset_lifecycle_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLifecycleRule"></a>

```python
def reset_lifecycle_rule() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_policy` <a name="reset_policy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetPolicy"></a>

```python
def reset_policy() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_versioning` <a name="reset_versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetVersioning"></a>

```python
def reset_versioning() -> None
```

##### `reset_website` <a name="reset_website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsite"></a>

```python
def reset_website() -> None
```

##### `reset_website_domain` <a name="reset_website_domain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteDomain"></a>

```python
def reset_website_domain() -> None
```

##### `reset_website_endpoint` <a name="reset_website_endpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteEndpoint"></a>

```python
def reset_website_endpoint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a S3Bucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3Bucket.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3Bucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3Bucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3Bucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a S3Bucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the S3Bucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing S3Bucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3Bucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketDomainName">bucket_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRule">cors_rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRule">lifecycle_rule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList">S3BucketLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefixInput">bucket_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRuleInput">cors_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneIdInput">hosted_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRuleInput">lifecycle_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.loggingInput">logging_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioningInput">versioning_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomainInput">website_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpointInput">website_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteInput">website_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomain">website_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpoint">website_endpoint</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_domain_name`<sup>Required</sup> <a name="bucket_domain_name" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketDomainName"></a>

```python
bucket_domain_name: str
```

- *Type:* str

---

##### `cors_rule`<sup>Required</sup> <a name="cors_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRule"></a>

```python
cors_rule: S3BucketCorsRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a>

---

##### `lifecycle_rule`<sup>Required</sup> <a name="lifecycle_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRule"></a>

```python
lifecycle_rule: S3BucketLifecycleRuleList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.logging"></a>

```python
logging: S3BucketLoggingList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList">S3BucketLoggingList</a>

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioning"></a>

```python
versioning: S3BucketVersioningOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.website"></a>

```python
website: S3BucketWebsiteOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a>

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `bucket_prefix_input`<sup>Optional</sup> <a name="bucket_prefix_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefixInput"></a>

```python
bucket_prefix_input: str
```

- *Type:* str

---

##### `cors_rule_input`<sup>Optional</sup> <a name="cors_rule_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRuleInput"></a>

```python
cors_rule_input: typing.Union[IResolvable, typing.List[S3BucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hosted_zone_id_input`<sup>Optional</sup> <a name="hosted_zone_id_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneIdInput"></a>

```python
hosted_zone_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `lifecycle_rule_input`<sup>Optional</sup> <a name="lifecycle_rule_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRuleInput"></a>

```python
lifecycle_rule_input: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.loggingInput"></a>

```python
logging_input: typing.Union[IResolvable, typing.List[S3BucketLogging]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]]

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `versioning_input`<sup>Optional</sup> <a name="versioning_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioningInput"></a>

```python
versioning_input: S3BucketVersioning
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---

##### `website_domain_input`<sup>Optional</sup> <a name="website_domain_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomainInput"></a>

```python
website_domain_input: str
```

- *Type:* str

---

##### `website_endpoint_input`<sup>Optional</sup> <a name="website_endpoint_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpointInput"></a>

```python
website_endpoint_input: str
```

- *Type:* str

---

##### `website_input`<sup>Optional</sup> <a name="website_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteInput"></a>

```python
website_input: S3BucketWebsite
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `bucket_prefix`<sup>Required</sup> <a name="bucket_prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hosted_zone_id`<sup>Required</sup> <a name="hosted_zone_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `website_domain`<sup>Required</sup> <a name="website_domain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomain"></a>

```python
website_domain: str
```

- *Type:* str

---

##### `website_endpoint`<sup>Required</sup> <a name="website_endpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpoint"></a>

```python
website_endpoint: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketConfig <a name="S3BucketConfig" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl: str = None,
  arn: str = None,
  bucket: str = None,
  bucket_prefix: str = None,
  cors_rule: typing.Union[IResolvable, typing.List[S3BucketCorsRule]] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  hosted_zone_id: str = None,
  id: str = None,
  lifecycle_rule: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]] = None,
  logging: typing.Union[IResolvable, typing.List[S3BucketLogging]] = None,
  policy: str = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  versioning: S3BucketVersioning = None,
  website: S3BucketWebsite = None,
  website_domain: str = None,
  website_endpoint: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#acl S3Bucket#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#arn S3Bucket#arn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucketPrefix">bucket_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.corsRule">cors_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.hostedZoneId">hosted_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycleRule">lifecycle_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.logging">logging</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]]</code> | logging block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.policy">policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#policy S3Bucket#policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#region S3Bucket#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | website block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteDomain">website_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteEndpoint">website_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.acl"></a>

```python
acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#acl S3Bucket#acl}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#arn S3Bucket#arn}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#bucket S3Bucket#bucket}.

---

##### `bucket_prefix`<sup>Optional</sup> <a name="bucket_prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucketPrefix"></a>

```python
bucket_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}.

---

##### `cors_rule`<sup>Optional</sup> <a name="cors_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.corsRule"></a>

```python
cors_rule: typing.Union[IResolvable, typing.List[S3BucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#cors_rule S3Bucket#cors_rule}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}.

---

##### `hosted_zone_id`<sup>Optional</sup> <a name="hosted_zone_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.hostedZoneId"></a>

```python
hosted_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycle_rule`<sup>Optional</sup> <a name="lifecycle_rule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycleRule"></a>

```python
lifecycle_rule: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.logging"></a>

```python
logging: typing.Union[IResolvable, typing.List[S3BucketLogging]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#logging S3Bucket#logging}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#policy S3Bucket#policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#region S3Bucket#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#tags S3Bucket#tags}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.versioning"></a>

```python
versioning: S3BucketVersioning
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#versioning S3Bucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.website"></a>

```python
website: S3BucketWebsite
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website S3Bucket#website}

---

##### `website_domain`<sup>Optional</sup> <a name="website_domain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteDomain"></a>

```python
website_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}.

---

##### `website_endpoint`<sup>Optional</sup> <a name="website_endpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteEndpoint"></a>

```python
website_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}.

---

### S3BucketCorsRule <a name="S3BucketCorsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketCorsRule(
  allowed_methods: typing.List[str],
  allowed_origins: typing.List[str],
  allowed_headers: typing.List[str] = None,
  expose_headers: typing.List[str] = None,
  max_age_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#allowed_methods S3Bucket#allowed_methods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#allowed_origins S3Bucket#allowed_origins}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#allowed_headers S3Bucket#allowed_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#expose_headers S3Bucket#expose_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}. |

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#allowed_methods S3Bucket#allowed_methods}.

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#allowed_origins S3Bucket#allowed_origins}.

---

##### `allowed_headers`<sup>Optional</sup> <a name="allowed_headers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#allowed_headers S3Bucket#allowed_headers}.

---

##### `expose_headers`<sup>Optional</sup> <a name="expose_headers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#expose_headers S3Bucket#expose_headers}.

---

##### `max_age_seconds`<sup>Optional</sup> <a name="max_age_seconds" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}.

---

### S3BucketLifecycleRule <a name="S3BucketLifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLifecycleRule(
  enabled: typing.Union[bool, IResolvable],
  abort_incomplete_multipart_upload_days: typing.Union[int, float] = None,
  expiration: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleExpiration]] = None,
  id: str = None,
  noncurrent_version_expiration: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionExpiration]] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays">abort_incomplete_multipart_upload_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.expiration">expiration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>]]</code> | expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>]]</code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#prefix S3Bucket#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#enabled S3Bucket#enabled}.

---

##### `abort_incomplete_multipart_upload_days`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays"></a>

```python
abort_incomplete_multipart_upload_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.expiration"></a>

```python
expiration: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>]]

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#expiration S3Bucket#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noncurrent_version_expiration`<sup>Optional</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>]]

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#prefix S3Bucket#prefix}.

---

### S3BucketLifecycleRuleExpiration <a name="S3BucketLifecycleRuleExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLifecycleRuleExpiration(
  date: str = None,
  days: typing.Union[int, float] = None,
  expired_object_delete_marker: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.date">date</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#date S3Bucket#date}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#days S3Bucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}. |

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.date"></a>

```python
date: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#date S3Bucket#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#days S3Bucket#days}.

---

##### `expired_object_delete_marker`<sup>Optional</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}.

---

### S3BucketLifecycleRuleNoncurrentVersionExpiration <a name="S3BucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration(
  days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#days S3Bucket#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#days S3Bucket#days}.

---

### S3BucketLogging <a name="S3BucketLogging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLogging(
  target_bucket: str,
  target_prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetBucket">target_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#target_bucket S3Bucket#target_bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetPrefix">target_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#target_prefix S3Bucket#target_prefix}. |

---

##### `target_bucket`<sup>Required</sup> <a name="target_bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetBucket"></a>

```python
target_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#target_bucket S3Bucket#target_bucket}.

---

##### `target_prefix`<sup>Optional</sup> <a name="target_prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetPrefix"></a>

```python
target_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#target_prefix S3Bucket#target_prefix}.

---

### S3BucketVersioning <a name="S3BucketVersioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketVersioning(
  enabled: typing.Union[bool, IResolvable] = None,
  mfa_delete: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.mfaDelete">mfa_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#mfa_delete S3Bucket#mfa_delete}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#enabled S3Bucket#enabled}.

---

##### `mfa_delete`<sup>Optional</sup> <a name="mfa_delete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.mfaDelete"></a>

```python
mfa_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#mfa_delete S3Bucket#mfa_delete}.

---

### S3BucketWebsite <a name="S3BucketWebsite" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketWebsite(
  error_document: str = None,
  index_document: str = None,
  redirect_all_requests_to: str = None,
  routing_rules: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.errorDocument">error_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#error_document S3Bucket#error_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.indexDocument">index_document</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#index_document S3Bucket#index_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.routingRules">routing_rules</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}. |

---

##### `error_document`<sup>Optional</sup> <a name="error_document" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.errorDocument"></a>

```python
error_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#error_document S3Bucket#error_document}.

---

##### `index_document`<sup>Optional</sup> <a name="index_document" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#index_document S3Bucket#index_document}.

---

##### `redirect_all_requests_to`<sup>Optional</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo"></a>

```python
redirect_all_requests_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}.

---

##### `routing_rules`<sup>Optional</sup> <a name="routing_rules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.routingRules"></a>

```python
routing_rules: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.18/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketCorsRuleList <a name="S3BucketCorsRuleList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketCorsRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketCorsRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketCorsRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]]

---


### S3BucketCorsRuleOutputReference <a name="S3BucketCorsRuleOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketCorsRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders">reset_allowed_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders">reset_expose_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds">reset_max_age_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_headers` <a name="reset_allowed_headers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders"></a>

```python
def reset_allowed_headers() -> None
```

##### `reset_expose_headers` <a name="reset_expose_headers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders"></a>

```python
def reset_expose_headers() -> None
```

##### `reset_max_age_seconds` <a name="reset_max_age_seconds" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```python
def reset_max_age_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput">allowed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput">allowed_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput">expose_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput">max_age_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders">allowed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods">allowed_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders">expose_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds">max_age_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_headers_input`<sup>Optional</sup> <a name="allowed_headers_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput"></a>

```python
allowed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods_input`<sup>Optional</sup> <a name="allowed_methods_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput"></a>

```python
allowed_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers_input`<sup>Optional</sup> <a name="expose_headers_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput"></a>

```python
expose_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds_input`<sup>Optional</sup> <a name="max_age_seconds_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```python
max_age_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_headers`<sup>Required</sup> <a name="allowed_headers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders"></a>

```python
allowed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_methods`<sup>Required</sup> <a name="allowed_methods" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods"></a>

```python
allowed_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expose_headers`<sup>Required</sup> <a name="expose_headers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders"></a>

```python
expose_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_age_seconds`<sup>Required</sup> <a name="max_age_seconds" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```python
max_age_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3BucketCorsRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>]

---


### S3BucketLifecycleRuleExpirationList <a name="S3BucketLifecycleRuleExpirationList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLifecycleRuleExpirationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLifecycleRuleExpirationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>]]

---


### S3BucketLifecycleRuleExpirationOutputReference <a name="S3BucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLifecycleRuleExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate">reset_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">reset_expired_object_delete_marker</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_date` <a name="reset_date" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate"></a>

```python
def reset_date() -> None
```

##### `reset_days` <a name="reset_days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_expired_object_delete_marker` <a name="reset_expired_object_delete_marker" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```python
def reset_expired_object_delete_marker() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput">date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">expired_object_delete_marker_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date">date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker">expired_object_delete_marker</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `date_input`<sup>Optional</sup> <a name="date_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput"></a>

```python
date_input: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker_input`<sup>Optional</sup> <a name="expired_object_delete_marker_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```python
expired_object_delete_marker_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date"></a>

```python
date: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expired_object_delete_marker`<sup>Required</sup> <a name="expired_object_delete_marker" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```python
expired_object_delete_marker: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3BucketLifecycleRuleExpiration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>]

---


### S3BucketLifecycleRuleList <a name="S3BucketLifecycleRuleList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLifecycleRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLifecycleRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]]

---


### S3BucketLifecycleRuleNoncurrentVersionExpirationList <a name="S3BucketLifecycleRuleNoncurrentVersionExpirationList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>]]

---


### S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays">reset_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays"></a>

```python
def reset_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3BucketLifecycleRuleNoncurrentVersionExpiration]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>]

---


### S3BucketLifecycleRuleOutputReference <a name="S3BucketLifecycleRuleOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLifecycleRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration">put_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration">put_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays">reset_abort_incomplete_multipart_upload_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration">reset_noncurrent_version_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_expiration` <a name="put_expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration"></a>

```python
def put_expiration(
  value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleExpiration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>]]

---

##### `put_noncurrent_version_expiration` <a name="put_noncurrent_version_expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration"></a>

```python
def put_noncurrent_version_expiration(
  value: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionExpiration]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>]]

---

##### `reset_abort_incomplete_multipart_upload_days` <a name="reset_abort_incomplete_multipart_upload_days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays"></a>

```python
def reset_abort_incomplete_multipart_upload_days() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_noncurrent_version_expiration` <a name="reset_noncurrent_version_expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```python
def reset_noncurrent_version_expiration() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList">S3BucketLifecycleRuleExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">noncurrent_version_expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList">S3BucketLifecycleRuleNoncurrentVersionExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput">abort_incomplete_multipart_upload_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput">expiration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput">noncurrent_version_expiration_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays">abort_incomplete_multipart_upload_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration"></a>

```python
expiration: S3BucketLifecycleRuleExpirationList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList">S3BucketLifecycleRuleExpirationList</a>

---

##### `noncurrent_version_expiration`<sup>Required</sup> <a name="noncurrent_version_expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```python
noncurrent_version_expiration: S3BucketLifecycleRuleNoncurrentVersionExpirationList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList">S3BucketLifecycleRuleNoncurrentVersionExpirationList</a>

---

##### `abort_incomplete_multipart_upload_days_input`<sup>Optional</sup> <a name="abort_incomplete_multipart_upload_days_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput"></a>

```python
abort_incomplete_multipart_upload_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput"></a>

```python
expiration_input: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `noncurrent_version_expiration_input`<sup>Optional</sup> <a name="noncurrent_version_expiration_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```python
noncurrent_version_expiration_input: typing.Union[IResolvable, typing.List[S3BucketLifecycleRuleNoncurrentVersionExpiration]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>]]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `abort_incomplete_multipart_upload_days`<sup>Required</sup> <a name="abort_incomplete_multipart_upload_days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays"></a>

```python
abort_incomplete_multipart_upload_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3BucketLifecycleRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>]

---


### S3BucketLoggingList <a name="S3BucketLoggingList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLoggingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> S3BucketLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[S3BucketLogging]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]]

---


### S3BucketLoggingOutputReference <a name="S3BucketLoggingOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix">reset_target_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_prefix` <a name="reset_target_prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix"></a>

```python
def reset_target_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput">target_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput">target_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket">target_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix">target_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_bucket_input`<sup>Optional</sup> <a name="target_bucket_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput"></a>

```python
target_bucket_input: str
```

- *Type:* str

---

##### `target_prefix_input`<sup>Optional</sup> <a name="target_prefix_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput"></a>

```python
target_prefix_input: str
```

- *Type:* str

---

##### `target_bucket`<sup>Required</sup> <a name="target_bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket"></a>

```python
target_bucket: str
```

- *Type:* str

---

##### `target_prefix`<sup>Required</sup> <a name="target_prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix"></a>

```python
target_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, S3BucketLogging]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>]

---


### S3BucketVersioningOutputReference <a name="S3BucketVersioningOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketVersioningOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete">reset_mfa_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_mfa_delete` <a name="reset_mfa_delete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete"></a>

```python
def reset_mfa_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput">mfa_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete">mfa_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mfa_delete_input`<sup>Optional</sup> <a name="mfa_delete_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput"></a>

```python
mfa_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mfa_delete`<sup>Required</sup> <a name="mfa_delete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete"></a>

```python
mfa_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketVersioning
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---


### S3BucketWebsiteOutputReference <a name="S3BucketWebsiteOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import s3_bucket

s3Bucket.S3BucketWebsiteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument">reset_error_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument">reset_index_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo">reset_redirect_all_requests_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules">reset_routing_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_error_document` <a name="reset_error_document" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument"></a>

```python
def reset_error_document() -> None
```

##### `reset_index_document` <a name="reset_index_document" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument"></a>

```python
def reset_index_document() -> None
```

##### `reset_redirect_all_requests_to` <a name="reset_redirect_all_requests_to" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo"></a>

```python
def reset_redirect_all_requests_to() -> None
```

##### `reset_routing_rules` <a name="reset_routing_rules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules"></a>

```python
def reset_routing_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput">error_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput">index_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput">redirect_all_requests_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput">routing_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument">error_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument">index_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo">redirect_all_requests_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules">routing_rules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_document_input`<sup>Optional</sup> <a name="error_document_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput"></a>

```python
error_document_input: str
```

- *Type:* str

---

##### `index_document_input`<sup>Optional</sup> <a name="index_document_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput"></a>

```python
index_document_input: str
```

- *Type:* str

---

##### `redirect_all_requests_to_input`<sup>Optional</sup> <a name="redirect_all_requests_to_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput"></a>

```python
redirect_all_requests_to_input: str
```

- *Type:* str

---

##### `routing_rules_input`<sup>Optional</sup> <a name="routing_rules_input" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput"></a>

```python
routing_rules_input: str
```

- *Type:* str

---

##### `error_document`<sup>Required</sup> <a name="error_document" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument"></a>

```python
error_document: str
```

- *Type:* str

---

##### `index_document`<sup>Required</sup> <a name="index_document" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument"></a>

```python
index_document: str
```

- *Type:* str

---

##### `redirect_all_requests_to`<sup>Required</sup> <a name="redirect_all_requests_to" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo"></a>

```python
redirect_all_requests_to: str
```

- *Type:* str

---

##### `routing_rules`<sup>Required</sup> <a name="routing_rules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules"></a>

```python
routing_rules: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue"></a>

```python
internal_value: S3BucketWebsite
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---



