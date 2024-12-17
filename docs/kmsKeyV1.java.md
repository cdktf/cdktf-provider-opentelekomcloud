# `kmsKeyV1` Submodule <a name="`kmsKeyV1` Submodule" id="@cdktf/provider-opentelekomcloud.kmsKeyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKeyV1 <a name="KmsKeyV1" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1 opentelekomcloud_kms_key_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.kms_key_v1.KmsKeyV1;

KmsKeyV1.Builder.create(Construct scope, java.lang.String id)
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
    .keyAlias(java.lang.String)
//  .allowCancelDeletion(java.lang.Boolean)
//  .allowCancelDeletion(IResolvable)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .keyDescription(java.lang.String)
//  .origin(java.lang.String)
//  .pendingDays(java.lang.String)
//  .realm(java.lang.String)
//  .rotationEnabled(java.lang.Boolean)
//  .rotationEnabled(IResolvable)
//  .rotationInterval(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.keyAlias">keyAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.allowCancelDeletion">allowCancelDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#id KmsKeyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.keyDescription">keyDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.origin">origin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#origin KmsKeyV1#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.pendingDays">pendingDays</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.realm">realm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#realm KmsKeyV1#realm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.rotationEnabled">rotationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.rotationInterval">rotationInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#tags KmsKeyV1#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.keyAlias"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}.

---

##### `allowCancelDeletion`<sup>Optional</sup> <a name="allowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.allowCancelDeletion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#id KmsKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.isEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}.

---

##### `keyDescription`<sup>Optional</sup> <a name="keyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.keyDescription"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.origin"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#origin KmsKeyV1#origin}.

---

##### `pendingDays`<sup>Optional</sup> <a name="pendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.pendingDays"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.realm"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#realm KmsKeyV1#realm}.

---

##### `rotationEnabled`<sup>Optional</sup> <a name="rotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.rotationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}.

---

##### `rotationInterval`<sup>Optional</sup> <a name="rotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.rotationInterval"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#tags KmsKeyV1#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetAllowCancelDeletion">resetAllowCancelDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetKeyDescription">resetKeyDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetPendingDays">resetPendingDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRealm">resetRealm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationEnabled">resetRotationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationInterval">resetRotationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowCancelDeletion` <a name="resetAllowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetAllowCancelDeletion"></a>

```java
public void resetAllowCancelDeletion()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetId"></a>

```java
public void resetId()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetKeyDescription` <a name="resetKeyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetKeyDescription"></a>

```java
public void resetKeyDescription()
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetOrigin"></a>

```java
public void resetOrigin()
```

##### `resetPendingDays` <a name="resetPendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetPendingDays"></a>

```java
public void resetPendingDays()
```

##### `resetRealm` <a name="resetRealm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRealm"></a>

```java
public void resetRealm()
```

##### `resetRotationEnabled` <a name="resetRotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationEnabled"></a>

```java
public void resetRotationEnabled()
```

##### `resetRotationInterval` <a name="resetRotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetRotationInterval"></a>

```java
public void resetRotationInterval()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KmsKeyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.kms_key_v1.KmsKeyV1;

KmsKeyV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.kms_key_v1.KmsKeyV1;

KmsKeyV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.kms_key_v1.KmsKeyV1;

KmsKeyV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.kms_key_v1.KmsKeyV1;

KmsKeyV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KmsKeyV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KmsKeyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KmsKeyV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KmsKeyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KmsKeyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.creationDate">creationDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.defaultKeyFlag">defaultKeyFlag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyState">keyState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationNumber">rotationNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.scheduledDeletionDate">scheduledDeletionDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletionInput">allowCancelDeletionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAliasInput">keyAliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescriptionInput">keyDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.originInput">originInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDaysInput">pendingDaysInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realmInput">realmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabledInput">rotationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationIntervalInput">rotationIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletion">allowCancelDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAlias">keyAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescription">keyDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDays">pendingDays</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realm">realm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabled">rotationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationInterval">rotationInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.creationDate"></a>

```java
public java.lang.String getCreationDate();
```

- *Type:* java.lang.String

---

##### `defaultKeyFlag`<sup>Required</sup> <a name="defaultKeyFlag" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.defaultKeyFlag"></a>

```java
public java.lang.String getDefaultKeyFlag();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyState"></a>

```java
public java.lang.String getKeyState();
```

- *Type:* java.lang.String

---

##### `rotationNumber`<sup>Required</sup> <a name="rotationNumber" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationNumber"></a>

```java
public java.lang.Number getRotationNumber();
```

- *Type:* java.lang.Number

---

##### `scheduledDeletionDate`<sup>Required</sup> <a name="scheduledDeletionDate" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.scheduledDeletionDate"></a>

```java
public java.lang.String getScheduledDeletionDate();
```

- *Type:* java.lang.String

---

##### `allowCancelDeletionInput`<sup>Optional</sup> <a name="allowCancelDeletionInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletionInput"></a>

```java
public java.lang.Object getAllowCancelDeletionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAliasInput`<sup>Optional</sup> <a name="keyAliasInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAliasInput"></a>

```java
public java.lang.String getKeyAliasInput();
```

- *Type:* java.lang.String

---

##### `keyDescriptionInput`<sup>Optional</sup> <a name="keyDescriptionInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescriptionInput"></a>

```java
public java.lang.String getKeyDescriptionInput();
```

- *Type:* java.lang.String

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.originInput"></a>

```java
public java.lang.String getOriginInput();
```

- *Type:* java.lang.String

---

##### `pendingDaysInput`<sup>Optional</sup> <a name="pendingDaysInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDaysInput"></a>

```java
public java.lang.String getPendingDaysInput();
```

- *Type:* java.lang.String

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realmInput"></a>

```java
public java.lang.String getRealmInput();
```

- *Type:* java.lang.String

---

##### `rotationEnabledInput`<sup>Optional</sup> <a name="rotationEnabledInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabledInput"></a>

```java
public java.lang.Object getRotationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rotationIntervalInput`<sup>Optional</sup> <a name="rotationIntervalInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationIntervalInput"></a>

```java
public java.lang.Number getRotationIntervalInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowCancelDeletion`<sup>Required</sup> <a name="allowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.allowCancelDeletion"></a>

```java
public java.lang.Object getAllowCancelDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyAlias"></a>

```java
public java.lang.String getKeyAlias();
```

- *Type:* java.lang.String

---

##### `keyDescription`<sup>Required</sup> <a name="keyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.keyDescription"></a>

```java
public java.lang.String getKeyDescription();
```

- *Type:* java.lang.String

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `pendingDays`<sup>Required</sup> <a name="pendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.pendingDays"></a>

```java
public java.lang.String getPendingDays();
```

- *Type:* java.lang.String

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

---

##### `rotationEnabled`<sup>Required</sup> <a name="rotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationEnabled"></a>

```java
public java.lang.Object getRotationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `rotationInterval`<sup>Required</sup> <a name="rotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.rotationInterval"></a>

```java
public java.lang.Number getRotationInterval();
```

- *Type:* java.lang.Number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyV1Config <a name="KmsKeyV1Config" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.kms_key_v1.KmsKeyV1Config;

KmsKeyV1Config.builder()
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
    .keyAlias(java.lang.String)
//  .allowCancelDeletion(java.lang.Boolean)
//  .allowCancelDeletion(IResolvable)
//  .id(java.lang.String)
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .keyDescription(java.lang.String)
//  .origin(java.lang.String)
//  .pendingDays(java.lang.String)
//  .realm(java.lang.String)
//  .rotationEnabled(java.lang.Boolean)
//  .rotationEnabled(IResolvable)
//  .rotationInterval(java.lang.Number)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyAlias">keyAlias</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.allowCancelDeletion">allowCancelDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#id KmsKeyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyDescription">keyDescription</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.origin">origin</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#origin KmsKeyV1#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.pendingDays">pendingDays</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.realm">realm</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#realm KmsKeyV1#realm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationEnabled">rotationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationInterval">rotationInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#tags KmsKeyV1#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyAlias"></a>

```java
public java.lang.String getKeyAlias();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}.

---

##### `allowCancelDeletion`<sup>Optional</sup> <a name="allowCancelDeletion" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.allowCancelDeletion"></a>

```java
public java.lang.Object getAllowCancelDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#allow_cancel_deletion KmsKeyV1#allow_cancel_deletion}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#id KmsKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}.

---

##### `keyDescription`<sup>Optional</sup> <a name="keyDescription" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.keyDescription"></a>

```java
public java.lang.String getKeyDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#origin KmsKeyV1#origin}.

---

##### `pendingDays`<sup>Optional</sup> <a name="pendingDays" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.pendingDays"></a>

```java
public java.lang.String getPendingDays();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.realm"></a>

```java
public java.lang.String getRealm();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#realm KmsKeyV1#realm}.

---

##### `rotationEnabled`<sup>Optional</sup> <a name="rotationEnabled" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationEnabled"></a>

```java
public java.lang.Object getRotationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}.

---

##### `rotationInterval`<sup>Optional</sup> <a name="rotationInterval" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.rotationInterval"></a>

```java
public java.lang.Number getRotationInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.kmsKeyV1.KmsKeyV1Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.27/docs/resources/kms_key_v1#tags KmsKeyV1#tags}.

---



