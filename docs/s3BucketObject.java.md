# `s3BucketObject` Submodule <a name="`s3BucketObject` Submodule" id="@cdktf/provider-opentelekomcloud.s3BucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketObject <a name="S3BucketObject" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object opentelekomcloud_s3_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket_object.S3BucketObject;

S3BucketObject.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .acl(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .serverSideEncryption(java.lang.String)
//  .source(java.lang.String)
//  .sseKmsKeyId(java.lang.String)
//  .websiteRedirect(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#bucket S3BucketObject#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#key S3BucketObject#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#acl S3BucketObject#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#cache_control S3BucketObject#cache_control}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content S3BucketObject#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_disposition S3BucketObject#content_disposition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_encoding S3BucketObject#content_encoding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_language S3BucketObject#content_language}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_type S3BucketObject#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#etag S3BucketObject#etag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#id S3BucketObject#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#server_side_encryption S3BucketObject#server_side_encryption}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#source S3BucketObject#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.sseKmsKeyId">sseKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#sse_kms_key_id S3BucketObject#sse_kms_key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#website_redirect S3BucketObject#website_redirect}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#bucket S3BucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#key S3BucketObject#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.acl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#acl S3BucketObject#acl}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.cacheControl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#cache_control S3BucketObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content S3BucketObject#content}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.contentDisposition"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_disposition S3BucketObject#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.contentEncoding"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_encoding S3BucketObject#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.contentLanguage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_language S3BucketObject#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_type S3BucketObject#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#etag S3BucketObject#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#id S3BucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.serverSideEncryption"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#server_side_encryption S3BucketObject#server_side_encryption}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#source S3BucketObject#source}.

---

##### `sseKmsKeyId`<sup>Optional</sup> <a name="sseKmsKeyId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.sseKmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#sse_kms_key_id S3BucketObject#sse_kms_key_id}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.websiteRedirect"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#website_redirect S3BucketObject#website_redirect}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetSseKmsKeyId">resetSseKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetAcl"></a>

```java
public void resetAcl()
```

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetCacheControl"></a>

```java
public void resetCacheControl()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentLanguage"></a>

```java
public void resetContentLanguage()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetId"></a>

```java
public void resetId()
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetServerSideEncryption"></a>

```java
public void resetServerSideEncryption()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetSource"></a>

```java
public void resetSource()
```

##### `resetSseKmsKeyId` <a name="resetSseKmsKeyId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetSseKmsKeyId"></a>

```java
public void resetSseKmsKeyId()
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetWebsiteRedirect"></a>

```java
public void resetWebsiteRedirect()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket_object.S3BucketObject;

S3BucketObject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket_object.S3BucketObject;

S3BucketObject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket_object.S3BucketObject;

S3BucketObject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket_object.S3BucketObject;

S3BucketObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),S3BucketObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a S3BucketObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the S3BucketObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing S3BucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cacheControlInput">cacheControlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentLanguageInput">contentLanguageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sseKmsKeyIdInput">sseKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sseKmsKeyId">sseKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cacheControlInput"></a>

```java
public java.lang.String getCacheControlInput();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentLanguageInput"></a>

```java
public java.lang.String getContentLanguageInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.serverSideEncryptionInput"></a>

```java
public java.lang.String getServerSideEncryptionInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `sseKmsKeyIdInput`<sup>Optional</sup> <a name="sseKmsKeyIdInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sseKmsKeyIdInput"></a>

```java
public java.lang.String getSseKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.websiteRedirectInput"></a>

```java
public java.lang.String getWebsiteRedirectInput();
```

- *Type:* java.lang.String

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `sseKmsKeyId`<sup>Required</sup> <a name="sseKmsKeyId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sseKmsKeyId"></a>

```java
public java.lang.String getSseKmsKeyId();
```

- *Type:* java.lang.String

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketObjectConfig <a name="S3BucketObjectConfig" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.s3_bucket_object.S3BucketObjectConfig;

S3BucketObjectConfig.builder()
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
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .acl(java.lang.String)
//  .cacheControl(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentLanguage(java.lang.String)
//  .contentType(java.lang.String)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .serverSideEncryption(java.lang.String)
//  .source(java.lang.String)
//  .sseKmsKeyId(java.lang.String)
//  .websiteRedirect(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#bucket S3BucketObject#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#key S3BucketObject#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#acl S3BucketObject#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.cacheControl">cacheControl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#cache_control S3BucketObject#cache_control}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content S3BucketObject#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_disposition S3BucketObject#content_disposition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_encoding S3BucketObject#content_encoding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_language S3BucketObject#content_language}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_type S3BucketObject#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#etag S3BucketObject#etag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#id S3BucketObject#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#server_side_encryption S3BucketObject#server_side_encryption}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#source S3BucketObject#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.sseKmsKeyId">sseKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#sse_kms_key_id S3BucketObject#sse_kms_key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#website_redirect S3BucketObject#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#bucket S3BucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#key S3BucketObject#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#acl S3BucketObject#acl}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.cacheControl"></a>

```java
public java.lang.String getCacheControl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#cache_control S3BucketObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content S3BucketObject#content}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_disposition S3BucketObject#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_encoding S3BucketObject#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentLanguage"></a>

```java
public java.lang.String getContentLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_language S3BucketObject#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#content_type S3BucketObject#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#etag S3BucketObject#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#id S3BucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.serverSideEncryption"></a>

```java
public java.lang.String getServerSideEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#server_side_encryption S3BucketObject#server_side_encryption}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#source S3BucketObject#source}.

---

##### `sseKmsKeyId`<sup>Optional</sup> <a name="sseKmsKeyId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.sseKmsKeyId"></a>

```java
public java.lang.String getSseKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#sse_kms_key_id S3BucketObject#sse_kms_key_id}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.websiteRedirect"></a>

```java
public java.lang.String getWebsiteRedirect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/resources/s3_bucket_object#website_redirect S3BucketObject#website_redirect}.

---



