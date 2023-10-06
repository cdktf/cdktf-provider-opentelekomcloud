# `opentelekomcloud_s3_bucket`

Refer to the Terraform Registory for docs: [`opentelekomcloud_s3_bucket`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket).

# `s3Bucket` Submodule <a name="`s3Bucket` Submodule" id="@cdktf/provider-opentelekomcloud.s3Bucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Bucket <a name="S3Bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket opentelekomcloud_s3_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3Bucket;

S3Bucket.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .acl(java.lang.String)
//  .arn(java.lang.String)
//  .bucket(java.lang.String)
//  .bucketPrefix(java.lang.String)
//  .corsRule(IResolvable)
//  .corsRule(java.util.List<S3BucketCorsRule>)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .hostedZoneId(java.lang.String)
//  .id(java.lang.String)
//  .lifecycleRule(IResolvable)
//  .lifecycleRule(java.util.List<S3BucketLifecycleRule>)
//  .logging(IResolvable)
//  .logging(java.util.List<S3BucketLogging>)
//  .policy(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .versioning(S3BucketVersioning)
//  .website(S3BucketWebsite)
//  .websiteDomain(java.lang.String)
//  .websiteEndpoint(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#acl S3Bucket#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#arn S3Bucket#arn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.corsRule">corsRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.lifecycleRule">lifecycleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>></code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.logging">logging</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>></code> | logging block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#policy S3Bucket#policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#region S3Bucket#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | website block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.websiteDomain">websiteDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.websiteEndpoint">websiteEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.acl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#acl S3Bucket#acl}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.arn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#arn S3Bucket#arn}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#bucket S3Bucket#bucket}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.bucketPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}.

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.corsRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#cors_rule S3Bucket#cors_rule}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.forceDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}.

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.hostedZoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.lifecycleRule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>>

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.logging"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#logging S3Bucket#logging}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.policy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#policy S3Bucket#policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#region S3Bucket#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#tags S3Bucket#tags}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.versioning"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#versioning S3Bucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.website"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website S3Bucket#website}

---

##### `websiteDomain`<sup>Optional</sup> <a name="websiteDomain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.websiteDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}.

---

##### `websiteEndpoint`<sup>Optional</sup> <a name="websiteEndpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.websiteEndpoint"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLifecycleRule">putLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning">putVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite">putWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLifecycleRule">resetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsite">resetWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteDomain">resetWebsiteDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteEndpoint">resetWebsiteEndpoint</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putCorsRule` <a name="putCorsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putCorsRule"></a>

```java
public void putCorsRule(IResolvable OR java.util.List<S3BucketCorsRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putCorsRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>>

---

##### `putLifecycleRule` <a name="putLifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLifecycleRule"></a>

```java
public void putLifecycleRule(IResolvable OR java.util.List<S3BucketLifecycleRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLifecycleRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>>

---

##### `putLogging` <a name="putLogging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLogging"></a>

```java
public void putLogging(IResolvable OR java.util.List<S3BucketLogging> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLogging.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>>

---

##### `putVersioning` <a name="putVersioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning"></a>

```java
public void putVersioning(S3BucketVersioning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---

##### `putWebsite` <a name="putWebsite" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite"></a>

```java
public void putWebsite(S3BucketWebsite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetAcl"></a>

```java
public void resetAcl()
```

##### `resetArn` <a name="resetArn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetArn"></a>

```java
public void resetArn()
```

##### `resetBucket` <a name="resetBucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucketPrefix"></a>

```java
public void resetBucketPrefix()
```

##### `resetCorsRule` <a name="resetCorsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetCorsRule"></a>

```java
public void resetCorsRule()
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetForceDestroy"></a>

```java
public void resetForceDestroy()
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetHostedZoneId"></a>

```java
public void resetHostedZoneId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetId"></a>

```java
public void resetId()
```

##### `resetLifecycleRule` <a name="resetLifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLifecycleRule"></a>

```java
public void resetLifecycleRule()
```

##### `resetLogging` <a name="resetLogging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLogging"></a>

```java
public void resetLogging()
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetPolicy"></a>

```java
public void resetPolicy()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetTags"></a>

```java
public void resetTags()
```

##### `resetVersioning` <a name="resetVersioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetVersioning"></a>

```java
public void resetVersioning()
```

##### `resetWebsite` <a name="resetWebsite" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsite"></a>

```java
public void resetWebsite()
```

##### `resetWebsiteDomain` <a name="resetWebsiteDomain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteDomain"></a>

```java
public void resetWebsiteDomain()
```

##### `resetWebsiteEndpoint` <a name="resetWebsiteEndpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteEndpoint"></a>

```java
public void resetWebsiteEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3Bucket;

S3Bucket.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3Bucket;

S3Bucket.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3Bucket;

S3Bucket.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketDomainName">bucketDomainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRule">corsRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRule">lifecycleRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList">S3BucketLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRuleInput">corsRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroyInput">forceDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRuleInput">lifecycleRuleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.loggingInput">loggingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policyInput">policyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioningInput">versioningInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomainInput">websiteDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpointInput">websiteEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteInput">websiteInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomain">websiteDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpoint">websiteEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketDomainName"></a>

```java
public java.lang.String getBucketDomainName();
```

- *Type:* java.lang.String

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRule"></a>

```java
public S3BucketCorsRuleList getCorsRule();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a>

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRule"></a>

```java
public S3BucketLifecycleRuleList getLifecycleRule();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.logging"></a>

```java
public S3BucketLoggingList getLogging();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList">S3BucketLoggingList</a>

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioning"></a>

```java
public S3BucketVersioningOutputReference getVersioning();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a>

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.website"></a>

```java
public S3BucketWebsiteOutputReference getWebsite();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a>

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefixInput"></a>

```java
public java.lang.String getBucketPrefixInput();
```

- *Type:* java.lang.String

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRuleInput"></a>

```java
public java.lang.Object getCorsRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroyInput"></a>

```java
public java.lang.Object getForceDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneIdInput"></a>

```java
public java.lang.String getHostedZoneIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lifecycleRuleInput`<sup>Optional</sup> <a name="lifecycleRuleInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRuleInput"></a>

```java
public java.lang.Object getLifecycleRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>>

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.loggingInput"></a>

```java
public java.lang.Object getLoggingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policyInput"></a>

```java
public java.lang.String getPolicyInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioningInput"></a>

```java
public S3BucketVersioning getVersioningInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---

##### `websiteDomainInput`<sup>Optional</sup> <a name="websiteDomainInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomainInput"></a>

```java
public java.lang.String getWebsiteDomainInput();
```

- *Type:* java.lang.String

---

##### `websiteEndpointInput`<sup>Optional</sup> <a name="websiteEndpointInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpointInput"></a>

```java
public java.lang.String getWebsiteEndpointInput();
```

- *Type:* java.lang.String

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteInput"></a>

```java
public S3BucketWebsite getWebsiteInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `websiteDomain`<sup>Required</sup> <a name="websiteDomain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomain"></a>

```java
public java.lang.String getWebsiteDomain();
```

- *Type:* java.lang.String

---

##### `websiteEndpoint`<sup>Required</sup> <a name="websiteEndpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpoint"></a>

```java
public java.lang.String getWebsiteEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketConfig <a name="S3BucketConfig" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketConfig;

S3BucketConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .acl(java.lang.String)
//  .arn(java.lang.String)
//  .bucket(java.lang.String)
//  .bucketPrefix(java.lang.String)
//  .corsRule(IResolvable)
//  .corsRule(java.util.List<S3BucketCorsRule>)
//  .forceDestroy(java.lang.Boolean)
//  .forceDestroy(IResolvable)
//  .hostedZoneId(java.lang.String)
//  .id(java.lang.String)
//  .lifecycleRule(IResolvable)
//  .lifecycleRule(java.util.List<S3BucketLifecycleRule>)
//  .logging(IResolvable)
//  .logging(java.util.List<S3BucketLogging>)
//  .policy(java.lang.String)
//  .region(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .versioning(S3BucketVersioning)
//  .website(S3BucketWebsite)
//  .websiteDomain(java.lang.String)
//  .websiteEndpoint(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#acl S3Bucket#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#arn S3Bucket#arn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucketPrefix">bucketPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.corsRule">corsRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>></code> | cors_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forceDestroy">forceDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycleRule">lifecycleRule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>></code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.logging">logging</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>></code> | logging block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.policy">policy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#policy S3Bucket#policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#region S3Bucket#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.versioning">versioning</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.website">website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | website block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteDomain">websiteDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteEndpoint">websiteEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#acl S3Bucket#acl}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#arn S3Bucket#arn}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#bucket S3Bucket#bucket}.

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucketPrefix"></a>

```java
public java.lang.String getBucketPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}.

---

##### `corsRule`<sup>Optional</sup> <a name="corsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.corsRule"></a>

```java
public java.lang.Object getCorsRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>>

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#cors_rule S3Bucket#cors_rule}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forceDestroy"></a>

```java
public java.lang.Object getForceDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}.

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.hostedZoneId"></a>

```java
public java.lang.String getHostedZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleRule`<sup>Optional</sup> <a name="lifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycleRule"></a>

```java
public java.lang.Object getLifecycleRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>>

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.logging"></a>

```java
public java.lang.Object getLogging();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#logging S3Bucket#logging}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#policy S3Bucket#policy}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#region S3Bucket#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#tags S3Bucket#tags}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.versioning"></a>

```java
public S3BucketVersioning getVersioning();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#versioning S3Bucket#versioning}

---

##### `website`<sup>Optional</sup> <a name="website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.website"></a>

```java
public S3BucketWebsite getWebsite();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website S3Bucket#website}

---

##### `websiteDomain`<sup>Optional</sup> <a name="websiteDomain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteDomain"></a>

```java
public java.lang.String getWebsiteDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}.

---

##### `websiteEndpoint`<sup>Optional</sup> <a name="websiteEndpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteEndpoint"></a>

```java
public java.lang.String getWebsiteEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}.

---

### S3BucketCorsRule <a name="S3BucketCorsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketCorsRule;

S3BucketCorsRule.builder()
    .allowedMethods(java.util.List<java.lang.String>)
    .allowedOrigins(java.util.List<java.lang.String>)
//  .allowedHeaders(java.util.List<java.lang.String>)
//  .exposeHeaders(java.util.List<java.lang.String>)
//  .maxAgeSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#allowed_methods S3Bucket#allowed_methods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#allowed_origins S3Bucket#allowed_origins}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#allowed_headers S3Bucket#allowed_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#expose_headers S3Bucket#expose_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}. |

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#allowed_methods S3Bucket#allowed_methods}.

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#allowed_origins S3Bucket#allowed_origins}.

---

##### `allowedHeaders`<sup>Optional</sup> <a name="allowedHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#allowed_headers S3Bucket#allowed_headers}.

---

##### `exposeHeaders`<sup>Optional</sup> <a name="exposeHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#expose_headers S3Bucket#expose_headers}.

---

##### `maxAgeSeconds`<sup>Optional</sup> <a name="maxAgeSeconds" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}.

---

### S3BucketLifecycleRule <a name="S3BucketLifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLifecycleRule;

S3BucketLifecycleRule.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .abortIncompleteMultipartUploadDays(java.lang.Number)
//  .expiration(IResolvable)
//  .expiration(java.util.List<S3BucketLifecycleRuleExpiration>)
//  .id(java.lang.String)
//  .noncurrentVersionExpiration(IResolvable)
//  .noncurrentVersionExpiration(java.util.List<S3BucketLifecycleRuleNoncurrentVersionExpiration>)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays">abortIncompleteMultipartUploadDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.expiration">expiration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>></code> | expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration">noncurrentVersionExpiration</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>></code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#prefix S3Bucket#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#enabled S3Bucket#enabled}.

---

##### `abortIncompleteMultipartUploadDays`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays"></a>

```java
public java.lang.Number getAbortIncompleteMultipartUploadDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.expiration"></a>

```java
public java.lang.Object getExpiration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>>

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#expiration S3Bucket#expiration}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `noncurrentVersionExpiration`<sup>Optional</sup> <a name="noncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration"></a>

```java
public java.lang.Object getNoncurrentVersionExpiration();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>>

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#prefix S3Bucket#prefix}.

---

### S3BucketLifecycleRuleExpiration <a name="S3BucketLifecycleRuleExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLifecycleRuleExpiration;

S3BucketLifecycleRuleExpiration.builder()
//  .date(java.lang.String)
//  .days(java.lang.Number)
//  .expiredObjectDeleteMarker(java.lang.Boolean)
//  .expiredObjectDeleteMarker(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.date">date</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#date S3Bucket#date}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#days S3Bucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker">expiredObjectDeleteMarker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}. |

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#date S3Bucket#date}.

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#days S3Bucket#days}.

---

##### `expiredObjectDeleteMarker`<sup>Optional</sup> <a name="expiredObjectDeleteMarker" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker"></a>

```java
public java.lang.Object getExpiredObjectDeleteMarker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}.

---

### S3BucketLifecycleRuleNoncurrentVersionExpiration <a name="S3BucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration;

S3BucketLifecycleRuleNoncurrentVersionExpiration.builder()
//  .days(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days">days</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#days S3Bucket#days}. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#days S3Bucket#days}.

---

### S3BucketLogging <a name="S3BucketLogging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLogging;

S3BucketLogging.builder()
    .targetBucket(java.lang.String)
//  .targetPrefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetBucket">targetBucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#target_bucket S3Bucket#target_bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetPrefix">targetPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#target_prefix S3Bucket#target_prefix}. |

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetBucket"></a>

```java
public java.lang.String getTargetBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#target_bucket S3Bucket#target_bucket}.

---

##### `targetPrefix`<sup>Optional</sup> <a name="targetPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetPrefix"></a>

```java
public java.lang.String getTargetPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#target_prefix S3Bucket#target_prefix}.

---

### S3BucketVersioning <a name="S3BucketVersioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketVersioning;

S3BucketVersioning.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .mfaDelete(java.lang.Boolean)
//  .mfaDelete(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.mfaDelete">mfaDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#mfa_delete S3Bucket#mfa_delete}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#enabled S3Bucket#enabled}.

---

##### `mfaDelete`<sup>Optional</sup> <a name="mfaDelete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.mfaDelete"></a>

```java
public java.lang.Object getMfaDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#mfa_delete S3Bucket#mfa_delete}.

---

### S3BucketWebsite <a name="S3BucketWebsite" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketWebsite;

S3BucketWebsite.builder()
//  .errorDocument(java.lang.String)
//  .indexDocument(java.lang.String)
//  .redirectAllRequestsTo(java.lang.String)
//  .routingRules(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.errorDocument">errorDocument</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#error_document S3Bucket#error_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.indexDocument">indexDocument</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#index_document S3Bucket#index_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo">redirectAllRequestsTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.routingRules">routingRules</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}. |

---

##### `errorDocument`<sup>Optional</sup> <a name="errorDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.errorDocument"></a>

```java
public java.lang.String getErrorDocument();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#error_document S3Bucket#error_document}.

---

##### `indexDocument`<sup>Optional</sup> <a name="indexDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.indexDocument"></a>

```java
public java.lang.String getIndexDocument();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#index_document S3Bucket#index_document}.

---

##### `redirectAllRequestsTo`<sup>Optional</sup> <a name="redirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo"></a>

```java
public java.lang.String getRedirectAllRequestsTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}.

---

##### `routingRules`<sup>Optional</sup> <a name="routingRules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.routingRules"></a>

```java
public java.lang.String getRoutingRules();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.9/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketCorsRuleList <a name="S3BucketCorsRuleList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketCorsRuleList;

new S3BucketCorsRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.get"></a>

```java
public S3BucketCorsRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>>

---


### S3BucketCorsRuleOutputReference <a name="S3BucketCorsRuleOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketCorsRuleOutputReference;

new S3BucketCorsRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders">resetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders">resetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds">resetMaxAgeSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedHeaders` <a name="resetAllowedHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders"></a>

```java
public void resetAllowedHeaders()
```

##### `resetExposeHeaders` <a name="resetExposeHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders"></a>

```java
public void resetExposeHeaders()
```

##### `resetMaxAgeSeconds` <a name="resetMaxAgeSeconds" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```java
public void resetMaxAgeSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput">allowedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput">allowedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput">exposeHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput">maxAgeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders">allowedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods">allowedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders">exposeHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds">maxAgeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedHeadersInput`<sup>Optional</sup> <a name="allowedHeadersInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethodsInput`<sup>Optional</sup> <a name="allowedMethodsInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeadersInput`<sup>Optional</sup> <a name="exposeHeadersInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposeHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeSecondsInput`<sup>Optional</sup> <a name="maxAgeSecondsInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```java
public java.lang.Number getMaxAgeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `allowedHeaders`<sup>Required</sup> <a name="allowedHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedMethods`<sup>Required</sup> <a name="allowedMethods" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods"></a>

```java
public java.util.List<java.lang.String> getAllowedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposeHeaders`<sup>Required</sup> <a name="exposeHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders"></a>

```java
public java.util.List<java.lang.String> getExposeHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxAgeSeconds`<sup>Required</sup> <a name="maxAgeSeconds" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```java
public java.lang.Number getMaxAgeSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>

---


### S3BucketLifecycleRuleExpirationList <a name="S3BucketLifecycleRuleExpirationList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLifecycleRuleExpirationList;

new S3BucketLifecycleRuleExpirationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.get"></a>

```java
public S3BucketLifecycleRuleExpirationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>>

---


### S3BucketLifecycleRuleExpirationOutputReference <a name="S3BucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLifecycleRuleExpirationOutputReference;

new S3BucketLifecycleRuleExpirationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays">resetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">resetExpiredObjectDeleteMarker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDate` <a name="resetDate" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate"></a>

```java
public void resetDate()
```

##### `resetDays` <a name="resetDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays"></a>

```java
public void resetDays()
```

##### `resetExpiredObjectDeleteMarker` <a name="resetExpiredObjectDeleteMarker" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```java
public void resetExpiredObjectDeleteMarker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput">dateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">expiredObjectDeleteMarkerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date">date</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker">expiredObjectDeleteMarker</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput"></a>

```java
public java.lang.String getDateInput();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `expiredObjectDeleteMarkerInput`<sup>Optional</sup> <a name="expiredObjectDeleteMarkerInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```java
public java.lang.Object getExpiredObjectDeleteMarkerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `expiredObjectDeleteMarker`<sup>Required</sup> <a name="expiredObjectDeleteMarker" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```java
public java.lang.Object getExpiredObjectDeleteMarker();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>

---


### S3BucketLifecycleRuleList <a name="S3BucketLifecycleRuleList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLifecycleRuleList;

new S3BucketLifecycleRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.get"></a>

```java
public S3BucketLifecycleRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>>

---


### S3BucketLifecycleRuleNoncurrentVersionExpirationList <a name="S3BucketLifecycleRuleNoncurrentVersionExpirationList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList;

new S3BucketLifecycleRuleNoncurrentVersionExpirationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.get"></a>

```java
public S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>>

---


### S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference;

new S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays">resetDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDays` <a name="resetDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays"></a>

```java
public void resetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput">daysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">days</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInput`<sup>Optional</sup> <a name="daysInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput"></a>

```java
public java.lang.Number getDaysInput();
```

- *Type:* java.lang.Number

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```java
public java.lang.Number getDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>

---


### S3BucketLifecycleRuleOutputReference <a name="S3BucketLifecycleRuleOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLifecycleRuleOutputReference;

new S3BucketLifecycleRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration">putExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration">putNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays">resetAbortIncompleteMultipartUploadDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration">resetNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpiration` <a name="putExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration"></a>

```java
public void putExpiration(IResolvable OR java.util.List<S3BucketLifecycleRuleExpiration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>>

---

##### `putNoncurrentVersionExpiration` <a name="putNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration"></a>

```java
public void putNoncurrentVersionExpiration(IResolvable OR java.util.List<S3BucketLifecycleRuleNoncurrentVersionExpiration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>>

---

##### `resetAbortIncompleteMultipartUploadDays` <a name="resetAbortIncompleteMultipartUploadDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays"></a>

```java
public void resetAbortIncompleteMultipartUploadDays()
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetNoncurrentVersionExpiration` <a name="resetNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```java
public void resetNoncurrentVersionExpiration()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration">expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList">S3BucketLifecycleRuleExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">noncurrentVersionExpiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList">S3BucketLifecycleRuleNoncurrentVersionExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput">abortIncompleteMultipartUploadDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput">expirationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput">noncurrentVersionExpirationInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays">abortIncompleteMultipartUploadDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration"></a>

```java
public S3BucketLifecycleRuleExpirationList getExpiration();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList">S3BucketLifecycleRuleExpirationList</a>

---

##### `noncurrentVersionExpiration`<sup>Required</sup> <a name="noncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```java
public S3BucketLifecycleRuleNoncurrentVersionExpirationList getNoncurrentVersionExpiration();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList">S3BucketLifecycleRuleNoncurrentVersionExpirationList</a>

---

##### `abortIncompleteMultipartUploadDaysInput`<sup>Optional</sup> <a name="abortIncompleteMultipartUploadDaysInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput"></a>

```java
public java.lang.Number getAbortIncompleteMultipartUploadDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput"></a>

```java
public java.lang.Object getExpirationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `noncurrentVersionExpirationInput`<sup>Optional</sup> <a name="noncurrentVersionExpirationInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```java
public java.lang.Object getNoncurrentVersionExpirationInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `abortIncompleteMultipartUploadDays`<sup>Required</sup> <a name="abortIncompleteMultipartUploadDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays"></a>

```java
public java.lang.Number getAbortIncompleteMultipartUploadDays();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>

---


### S3BucketLoggingList <a name="S3BucketLoggingList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLoggingList;

new S3BucketLoggingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.get"></a>

```java
public S3BucketLoggingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>>

---


### S3BucketLoggingOutputReference <a name="S3BucketLoggingOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketLoggingOutputReference;

new S3BucketLoggingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix">resetTargetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetPrefix` <a name="resetTargetPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix"></a>

```java
public void resetTargetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput">targetBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput">targetPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket">targetBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix">targetPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `targetBucketInput`<sup>Optional</sup> <a name="targetBucketInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput"></a>

```java
public java.lang.String getTargetBucketInput();
```

- *Type:* java.lang.String

---

##### `targetPrefixInput`<sup>Optional</sup> <a name="targetPrefixInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput"></a>

```java
public java.lang.String getTargetPrefixInput();
```

- *Type:* java.lang.String

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket"></a>

```java
public java.lang.String getTargetBucket();
```

- *Type:* java.lang.String

---

##### `targetPrefix`<sup>Required</sup> <a name="targetPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix"></a>

```java
public java.lang.String getTargetPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>

---


### S3BucketVersioningOutputReference <a name="S3BucketVersioningOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketVersioningOutputReference;

new S3BucketVersioningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete">resetMfaDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMfaDelete` <a name="resetMfaDelete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete"></a>

```java
public void resetMfaDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput">mfaDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete">mfaDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mfaDeleteInput`<sup>Optional</sup> <a name="mfaDeleteInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput"></a>

```java
public java.lang.Object getMfaDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mfaDelete`<sup>Required</sup> <a name="mfaDelete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete"></a>

```java
public java.lang.Object getMfaDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.internalValue"></a>

```java
public S3BucketVersioning getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---


### S3BucketWebsiteOutputReference <a name="S3BucketWebsiteOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket.S3BucketWebsiteOutputReference;

new S3BucketWebsiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument">resetErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument">resetIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo">resetRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules">resetRoutingRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorDocument` <a name="resetErrorDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument"></a>

```java
public void resetErrorDocument()
```

##### `resetIndexDocument` <a name="resetIndexDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument"></a>

```java
public void resetIndexDocument()
```

##### `resetRedirectAllRequestsTo` <a name="resetRedirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo"></a>

```java
public void resetRedirectAllRequestsTo()
```

##### `resetRoutingRules` <a name="resetRoutingRules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules"></a>

```java
public void resetRoutingRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput">errorDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput">indexDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput">redirectAllRequestsToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput">routingRulesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument">errorDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument">indexDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo">redirectAllRequestsTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules">routingRules</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `errorDocumentInput`<sup>Optional</sup> <a name="errorDocumentInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput"></a>

```java
public java.lang.String getErrorDocumentInput();
```

- *Type:* java.lang.String

---

##### `indexDocumentInput`<sup>Optional</sup> <a name="indexDocumentInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput"></a>

```java
public java.lang.String getIndexDocumentInput();
```

- *Type:* java.lang.String

---

##### `redirectAllRequestsToInput`<sup>Optional</sup> <a name="redirectAllRequestsToInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput"></a>

```java
public java.lang.String getRedirectAllRequestsToInput();
```

- *Type:* java.lang.String

---

##### `routingRulesInput`<sup>Optional</sup> <a name="routingRulesInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput"></a>

```java
public java.lang.String getRoutingRulesInput();
```

- *Type:* java.lang.String

---

##### `errorDocument`<sup>Required</sup> <a name="errorDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument"></a>

```java
public java.lang.String getErrorDocument();
```

- *Type:* java.lang.String

---

##### `indexDocument`<sup>Required</sup> <a name="indexDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument"></a>

```java
public java.lang.String getIndexDocument();
```

- *Type:* java.lang.String

---

##### `redirectAllRequestsTo`<sup>Required</sup> <a name="redirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo"></a>

```java
public java.lang.String getRedirectAllRequestsTo();
```

- *Type:* java.lang.String

---

##### `routingRules`<sup>Required</sup> <a name="routingRules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules"></a>

```java
public java.lang.String getRoutingRules();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue"></a>

```java
public S3BucketWebsite getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---



