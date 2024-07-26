# `obsBucketObject` Submodule <a name="`obsBucketObject` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketObject <a name="ObsBucketObject" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object opentelekomcloud_obs_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object.ObsBucketObject;

ObsBucketObject.Builder.create(Construct scope, java.lang.String id)
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
//  .content(java.lang.String)
//  .contentType(java.lang.String)
//  .encryption(java.lang.Boolean)
//  .encryption(IResolvable)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .source(java.lang.String)
//  .storageClass(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#bucket ObsBucketObject#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#key ObsBucketObject#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#acl ObsBucketObject#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#content ObsBucketObject#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#content_type ObsBucketObject#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.encryption">encryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#encryption ObsBucketObject#encryption}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#etag ObsBucketObject#etag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#id ObsBucketObject#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#kms_key_id ObsBucketObject#kms_key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#source ObsBucketObject#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#storage_class ObsBucketObject#storage_class}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#bucket ObsBucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#key ObsBucketObject#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.acl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#acl ObsBucketObject#acl}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#content ObsBucketObject#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#content_type ObsBucketObject#content_type}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.encryption"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#encryption ObsBucketObject#encryption}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#etag ObsBucketObject#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#id ObsBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#kms_key_id ObsBucketObject#kms_key_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#source ObsBucketObject#source}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.Initializer.parameter.storageClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#storage_class ObsBucketObject#storage_class}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetAcl"></a>

```java
public void resetAcl()
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetEncryption"></a>

```java
public void resetEncryption()
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetSource"></a>

```java
public void resetSource()
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.resetStorageClass"></a>

```java
public void resetStorageClass()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object.ObsBucketObject;

ObsBucketObject.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object.ObsBucketObject;

ObsBucketObject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object.ObsBucketObject;

ObsBucketObject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object.ObsBucketObject;

ObsBucketObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObsBucketObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ObsBucketObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObsBucketObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObsBucketObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.versionId">versionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.encryptionInput">encryptionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.encryption">encryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.versionId"></a>

```java
public java.lang.String getVersionId();
```

- *Type:* java.lang.String

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.encryptionInput"></a>

```java
public java.lang.Object getEncryptionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.encryption"></a>

```java
public java.lang.Object getEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketObjectConfig <a name="ObsBucketObjectConfig" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object.ObsBucketObjectConfig;

ObsBucketObjectConfig.builder()
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
//  .content(java.lang.String)
//  .contentType(java.lang.String)
//  .encryption(java.lang.Boolean)
//  .encryption(IResolvable)
//  .etag(java.lang.String)
//  .id(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .source(java.lang.String)
//  .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#bucket ObsBucketObject#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#key ObsBucketObject#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#acl ObsBucketObject#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.content">content</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#content ObsBucketObject#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#content_type ObsBucketObject#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.encryption">encryption</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#encryption ObsBucketObject#encryption}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#etag ObsBucketObject#etag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#id ObsBucketObject#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#kms_key_id ObsBucketObject#kms_key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#source ObsBucketObject#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#storage_class ObsBucketObject#storage_class}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#bucket ObsBucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#key ObsBucketObject#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#acl ObsBucketObject#acl}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#content ObsBucketObject#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#content_type ObsBucketObject#content_type}.

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.encryption"></a>

```java
public java.lang.Object getEncryption();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#encryption ObsBucketObject#encryption}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#etag ObsBucketObject#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#id ObsBucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#kms_key_id ObsBucketObject#kms_key_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#source ObsBucketObject#source}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/provider-opentelekomcloud.obsBucketObject.ObsBucketObjectConfig.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.15/docs/resources/obs_bucket_object#storage_class ObsBucketObject#storage_class}.

---



