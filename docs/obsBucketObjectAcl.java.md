# `obsBucketObjectAcl` Submodule <a name="`obsBucketObjectAcl` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketObjectAcl <a name="ObsBucketObjectAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl opentelekomcloud_obs_bucket_object_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAcl;

ObsBucketObjectAcl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .accountPermission(IResolvable|java.util.List<ObsBucketObjectAclAccountPermission>)
//  .id(java.lang.String)
//  .publicPermission(ObsBucketObjectAclPublicPermission)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.accountPermission">accountPermission</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>></code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | public_permission block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}.

---

##### `accountPermission`<sup>Optional</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.accountPermission"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>>

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#account_permission ObsBucketObjectAcl#account_permission}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicPermission`<sup>Optional</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.publicPermission"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#public_permission ObsBucketObjectAcl#public_permission}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission">putAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission">putPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetAccountPermission">resetAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetPublicPermission">resetPublicPermission</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountPermission` <a name="putAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission"></a>

```java
public void putAccountPermission(IResolvable|java.util.List<ObsBucketObjectAclAccountPermission> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>>

---

##### `putPublicPermission` <a name="putPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission"></a>

```java
public void putPublicPermission(ObsBucketObjectAclPublicPermission value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---

##### `resetAccountPermission` <a name="resetAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetAccountPermission"></a>

```java
public void resetAccountPermission()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetId"></a>

```java
public void resetId()
```

##### `resetPublicPermission` <a name="resetPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetPublicPermission"></a>

```java
public void resetPublicPermission()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketObjectAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAcl;

ObsBucketObjectAcl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAcl;

ObsBucketObjectAcl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAcl;

ObsBucketObjectAcl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAcl;

ObsBucketObjectAcl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObsBucketObjectAcl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ObsBucketObjectAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObsBucketObjectAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObsBucketObjectAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketObjectAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermission">accountPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList">ObsBucketObjectAclAccountPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.ownerPermission">ownerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList">ObsBucketObjectAclOwnerPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference">ObsBucketObjectAclPublicPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermissionInput">accountPermissionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermissionInput">publicPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountPermission`<sup>Required</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermission"></a>

```java
public ObsBucketObjectAclAccountPermissionList getAccountPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList">ObsBucketObjectAclAccountPermissionList</a>

---

##### `ownerPermission`<sup>Required</sup> <a name="ownerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.ownerPermission"></a>

```java
public ObsBucketObjectAclOwnerPermissionList getOwnerPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList">ObsBucketObjectAclOwnerPermissionList</a>

---

##### `publicPermission`<sup>Required</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermission"></a>

```java
public ObsBucketObjectAclPublicPermissionOutputReference getPublicPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference">ObsBucketObjectAclPublicPermissionOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `accountPermissionInput`<sup>Optional</sup> <a name="accountPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermissionInput"></a>

```java
public IResolvable|java.util.List<ObsBucketObjectAclAccountPermission> getAccountPermissionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `publicPermissionInput`<sup>Optional</sup> <a name="publicPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermissionInput"></a>

```java
public ObsBucketObjectAclPublicPermission getPublicPermissionInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketObjectAclAccountPermission <a name="ObsBucketObjectAclAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAclAccountPermission;

ObsBucketObjectAclAccountPermission.builder()
    .accountId(java.lang.String)
//  .accessToAcl(java.util.List<java.lang.String>)
//  .accessToObject(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#account_id ObsBucketObjectAcl#account_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToObject">accessToObject</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#account_id ObsBucketObjectAcl#account_id}.

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}.

---

##### `accessToObject`<sup>Optional</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToObject"></a>

```java
public java.util.List<java.lang.String> getAccessToObject();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}.

---

### ObsBucketObjectAclConfig <a name="ObsBucketObjectAclConfig" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAclConfig;

ObsBucketObjectAclConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
    .key(java.lang.String)
//  .accountPermission(IResolvable|java.util.List<ObsBucketObjectAclAccountPermission>)
//  .id(java.lang.String)
//  .publicPermission(ObsBucketObjectAclPublicPermission)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.accountPermission">accountPermission</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>></code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | public_permission block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}.

---

##### `accountPermission`<sup>Optional</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.accountPermission"></a>

```java
public IResolvable|java.util.List<ObsBucketObjectAclAccountPermission> getAccountPermission();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>>

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#account_permission ObsBucketObjectAcl#account_permission}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicPermission`<sup>Optional</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.publicPermission"></a>

```java
public ObsBucketObjectAclPublicPermission getPublicPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#public_permission ObsBucketObjectAcl#public_permission}

---

### ObsBucketObjectAclOwnerPermission <a name="ObsBucketObjectAclOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAclOwnerPermission;

ObsBucketObjectAclOwnerPermission.builder()
    .build();
```


### ObsBucketObjectAclPublicPermission <a name="ObsBucketObjectAclPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAclPublicPermission;

ObsBucketObjectAclPublicPermission.builder()
//  .accessToAcl(java.util.List<java.lang.String>)
//  .accessToObject(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToObject">accessToObject</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}. |

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}.

---

##### `accessToObject`<sup>Optional</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToObject"></a>

```java
public java.util.List<java.lang.String> getAccessToObject();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketObjectAclAccountPermissionList <a name="ObsBucketObjectAclAccountPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAclAccountPermissionList;

new ObsBucketObjectAclAccountPermissionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get"></a>

```java
public ObsBucketObjectAclAccountPermissionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ObsBucketObjectAclAccountPermission> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>>

---


### ObsBucketObjectAclAccountPermissionOutputReference <a name="ObsBucketObjectAclAccountPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAclAccountPermissionOutputReference;

new ObsBucketObjectAclAccountPermissionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToObject">resetAccessToObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToAcl"></a>

```java
public void resetAccessToAcl()
```

##### `resetAccessToObject` <a name="resetAccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToObject"></a>

```java
public void resetAccessToObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObjectInput">accessToObjectInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObject">accessToObject</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAclInput"></a>

```java
public java.util.List<java.lang.String> getAccessToAclInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToObjectInput`<sup>Optional</sup> <a name="accessToObjectInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObjectInput"></a>

```java
public java.util.List<java.lang.String> getAccessToObjectInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToObject`<sup>Required</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObject"></a>

```java
public java.util.List<java.lang.String> getAccessToObject();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.internalValue"></a>

```java
public IResolvable|ObsBucketObjectAclAccountPermission getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission">ObsBucketObjectAclAccountPermission</a>

---


### ObsBucketObjectAclOwnerPermissionList <a name="ObsBucketObjectAclOwnerPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAclOwnerPermissionList;

new ObsBucketObjectAclOwnerPermissionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get"></a>

```java
public ObsBucketObjectAclOwnerPermissionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ObsBucketObjectAclOwnerPermissionOutputReference <a name="ObsBucketObjectAclOwnerPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAclOwnerPermissionOutputReference;

new ObsBucketObjectAclOwnerPermissionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToObject">accessToObject</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission">ObsBucketObjectAclOwnerPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToObject`<sup>Required</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToObject"></a>

```java
public java.util.List<java.lang.String> getAccessToObject();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.internalValue"></a>

```java
public ObsBucketObjectAclOwnerPermission getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission">ObsBucketObjectAclOwnerPermission</a>

---


### ObsBucketObjectAclPublicPermissionOutputReference <a name="ObsBucketObjectAclPublicPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_object_acl.ObsBucketObjectAclPublicPermissionOutputReference;

new ObsBucketObjectAclPublicPermissionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToObject">resetAccessToObject</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToAcl"></a>

```java
public void resetAccessToAcl()
```

##### `resetAccessToObject` <a name="resetAccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToObject"></a>

```java
public void resetAccessToObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObjectInput">accessToObjectInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObject">accessToObject</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAclInput"></a>

```java
public java.util.List<java.lang.String> getAccessToAclInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToObjectInput`<sup>Optional</sup> <a name="accessToObjectInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObjectInput"></a>

```java
public java.util.List<java.lang.String> getAccessToObjectInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToObject`<sup>Required</sup> <a name="accessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObject"></a>

```java
public java.util.List<java.lang.String> getAccessToObject();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.internalValue"></a>

```java
public ObsBucketObjectAclPublicPermission getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---



