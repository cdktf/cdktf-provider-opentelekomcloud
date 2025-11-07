# `obsBucketAcl` Submodule <a name="`obsBucketAcl` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketAcl <a name="ObsBucketAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl opentelekomcloud_obs_bucket_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAcl;

ObsBucketAcl.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .accountPermission(IResolvable|java.util.List<ObsBucketAclAccountPermission>)
//  .id(java.lang.String)
//  .logDeliveryUserPermission(ObsBucketAclLogDeliveryUserPermission)
//  .ownerPermission(ObsBucketAclOwnerPermission)
//  .publicPermission(ObsBucketAclPublicPermission)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.accountPermission">accountPermission</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>></code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.logDeliveryUserPermission">logDeliveryUserPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | log_delivery_user_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.ownerPermission">ownerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | owner_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | public_permission block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}.

---

##### `accountPermission`<sup>Optional</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.accountPermission"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>>

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#account_permission ObsBucketAcl#account_permission}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logDeliveryUserPermission`<sup>Optional</sup> <a name="logDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.logDeliveryUserPermission"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

log_delivery_user_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#log_delivery_user_permission ObsBucketAcl#log_delivery_user_permission}

---

##### `ownerPermission`<sup>Optional</sup> <a name="ownerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.ownerPermission"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

owner_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#owner_permission ObsBucketAcl#owner_permission}

---

##### `publicPermission`<sup>Optional</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.Initializer.parameter.publicPermission"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#public_permission ObsBucketAcl#public_permission}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission">putAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission">putLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission">putOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission">putPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetAccountPermission">resetAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetLogDeliveryUserPermission">resetLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOwnerPermission">resetOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetPublicPermission">resetPublicPermission</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccountPermission` <a name="putAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission"></a>

```java
public void putAccountPermission(IResolvable|java.util.List<ObsBucketAclAccountPermission> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putAccountPermission.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>>

---

##### `putLogDeliveryUserPermission` <a name="putLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission"></a>

```java
public void putLogDeliveryUserPermission(ObsBucketAclLogDeliveryUserPermission value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putLogDeliveryUserPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---

##### `putOwnerPermission` <a name="putOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission"></a>

```java
public void putOwnerPermission(ObsBucketAclOwnerPermission value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putOwnerPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---

##### `putPublicPermission` <a name="putPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission"></a>

```java
public void putPublicPermission(ObsBucketAclPublicPermission value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.putPublicPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---

##### `resetAccountPermission` <a name="resetAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetAccountPermission"></a>

```java
public void resetAccountPermission()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetId"></a>

```java
public void resetId()
```

##### `resetLogDeliveryUserPermission` <a name="resetLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetLogDeliveryUserPermission"></a>

```java
public void resetLogDeliveryUserPermission()
```

##### `resetOwnerPermission` <a name="resetOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetOwnerPermission"></a>

```java
public void resetOwnerPermission()
```

##### `resetPublicPermission` <a name="resetPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.resetPublicPermission"></a>

```java
public void resetPublicPermission()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAcl;

ObsBucketAcl.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAcl;

ObsBucketAcl.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAcl;

ObsBucketAcl.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAcl;

ObsBucketAcl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObsBucketAcl.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ObsBucketAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObsBucketAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObsBucketAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermission">accountPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList">ObsBucketAclAccountPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermission">logDeliveryUserPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference">ObsBucketAclLogDeliveryUserPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermission">ownerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference">ObsBucketAclOwnerPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference">ObsBucketAclPublicPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermissionInput">accountPermissionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermissionInput">logDeliveryUserPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermissionInput">ownerPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermissionInput">publicPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountPermission`<sup>Required</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermission"></a>

```java
public ObsBucketAclAccountPermissionList getAccountPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList">ObsBucketAclAccountPermissionList</a>

---

##### `logDeliveryUserPermission`<sup>Required</sup> <a name="logDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermission"></a>

```java
public ObsBucketAclLogDeliveryUserPermissionOutputReference getLogDeliveryUserPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference">ObsBucketAclLogDeliveryUserPermissionOutputReference</a>

---

##### `ownerPermission`<sup>Required</sup> <a name="ownerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermission"></a>

```java
public ObsBucketAclOwnerPermissionOutputReference getOwnerPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference">ObsBucketAclOwnerPermissionOutputReference</a>

---

##### `publicPermission`<sup>Required</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermission"></a>

```java
public ObsBucketAclPublicPermissionOutputReference getPublicPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference">ObsBucketAclPublicPermissionOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `accountPermissionInput`<sup>Optional</sup> <a name="accountPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.accountPermissionInput"></a>

```java
public IResolvable|java.util.List<ObsBucketAclAccountPermission> getAccountPermissionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logDeliveryUserPermissionInput`<sup>Optional</sup> <a name="logDeliveryUserPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.logDeliveryUserPermissionInput"></a>

```java
public ObsBucketAclLogDeliveryUserPermission getLogDeliveryUserPermissionInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---

##### `ownerPermissionInput`<sup>Optional</sup> <a name="ownerPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.ownerPermissionInput"></a>

```java
public ObsBucketAclOwnerPermission getOwnerPermissionInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---

##### `publicPermissionInput`<sup>Optional</sup> <a name="publicPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.publicPermissionInput"></a>

```java
public ObsBucketAclPublicPermission getPublicPermissionInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAcl.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketAclAccountPermission <a name="ObsBucketAclAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclAccountPermission;

ObsBucketAclAccountPermission.builder()
    .accountId(java.lang.String)
//  .accessToAcl(java.util.List<java.lang.String>)
//  .accessToBucket(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#account_id ObsBucketAcl#account_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToBucket">accessToBucket</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#account_id ObsBucketAcl#account_id}.

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `accessToBucket`<sup>Optional</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission.property.accessToBucket"></a>

```java
public java.util.List<java.lang.String> getAccessToBucket();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclConfig <a name="ObsBucketAclConfig" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclConfig;

ObsBucketAclConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .accountPermission(IResolvable|java.util.List<ObsBucketAclAccountPermission>)
//  .id(java.lang.String)
//  .logDeliveryUserPermission(ObsBucketAclLogDeliveryUserPermission)
//  .ownerPermission(ObsBucketAclOwnerPermission)
//  .publicPermission(ObsBucketAclPublicPermission)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.accountPermission">accountPermission</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>></code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.logDeliveryUserPermission">logDeliveryUserPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | log_delivery_user_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.ownerPermission">ownerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | owner_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.publicPermission">publicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | public_permission block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#bucket ObsBucketAcl#bucket}.

---

##### `accountPermission`<sup>Optional</sup> <a name="accountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.accountPermission"></a>

```java
public IResolvable|java.util.List<ObsBucketAclAccountPermission> getAccountPermission();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>>

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#account_permission ObsBucketAcl#account_permission}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#id ObsBucketAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logDeliveryUserPermission`<sup>Optional</sup> <a name="logDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.logDeliveryUserPermission"></a>

```java
public ObsBucketAclLogDeliveryUserPermission getLogDeliveryUserPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

log_delivery_user_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#log_delivery_user_permission ObsBucketAcl#log_delivery_user_permission}

---

##### `ownerPermission`<sup>Optional</sup> <a name="ownerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.ownerPermission"></a>

```java
public ObsBucketAclOwnerPermission getOwnerPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

owner_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#owner_permission ObsBucketAcl#owner_permission}

---

##### `publicPermission`<sup>Optional</sup> <a name="publicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclConfig.property.publicPermission"></a>

```java
public ObsBucketAclPublicPermission getPublicPermission();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#public_permission ObsBucketAcl#public_permission}

---

### ObsBucketAclLogDeliveryUserPermission <a name="ObsBucketAclLogDeliveryUserPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclLogDeliveryUserPermission;

ObsBucketAclLogDeliveryUserPermission.builder()
//  .accessToAcl(java.util.List<java.lang.String>)
//  .accessToBucket(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToBucket">accessToBucket</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `accessToBucket`<sup>Optional</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission.property.accessToBucket"></a>

```java
public java.util.List<java.lang.String> getAccessToBucket();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclOwnerPermission <a name="ObsBucketAclOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclOwnerPermission;

ObsBucketAclOwnerPermission.builder()
//  .accessToAcl(java.util.List<java.lang.String>)
//  .accessToBucket(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToBucket">accessToBucket</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `accessToBucket`<sup>Optional</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission.property.accessToBucket"></a>

```java
public java.util.List<java.lang.String> getAccessToBucket();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

### ObsBucketAclPublicPermission <a name="ObsBucketAclPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclPublicPermission;

ObsBucketAclPublicPermission.builder()
//  .accessToAcl(java.util.List<java.lang.String>)
//  .accessToBucket(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToBucket">accessToBucket</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}. |

---

##### `accessToAcl`<sup>Optional</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_acl ObsBucketAcl#access_to_acl}.

---

##### `accessToBucket`<sup>Optional</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission.property.accessToBucket"></a>

```java
public java.util.List<java.lang.String> getAccessToBucket();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/obs_bucket_acl#access_to_bucket ObsBucketAcl#access_to_bucket}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketAclAccountPermissionList <a name="ObsBucketAclAccountPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclAccountPermissionList;

new ObsBucketAclAccountPermissionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get"></a>

```java
public ObsBucketAclAccountPermissionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ObsBucketAclAccountPermission> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>>

---


### ObsBucketAclAccountPermissionOutputReference <a name="ObsBucketAclAccountPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclAccountPermissionOutputReference;

new ObsBucketAclAccountPermissionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToBucket">resetAccessToBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToAcl"></a>

```java
public void resetAccessToAcl()
```

##### `resetAccessToBucket` <a name="resetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.resetAccessToBucket"></a>

```java
public void resetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucketInput">accessToBucketInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucket">accessToBucket</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAclInput"></a>

```java
public java.util.List<java.lang.String> getAccessToAclInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToBucketInput`<sup>Optional</sup> <a name="accessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucketInput"></a>

```java
public java.util.List<java.lang.String> getAccessToBucketInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToBucket`<sup>Required</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accessToBucket"></a>

```java
public java.util.List<java.lang.String> getAccessToBucket();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermissionOutputReference.property.internalValue"></a>

```java
public IResolvable|ObsBucketAclAccountPermission getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclAccountPermission">ObsBucketAclAccountPermission</a>

---


### ObsBucketAclLogDeliveryUserPermissionOutputReference <a name="ObsBucketAclLogDeliveryUserPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclLogDeliveryUserPermissionOutputReference;

new ObsBucketAclLogDeliveryUserPermissionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToBucket">resetAccessToBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToAcl"></a>

```java
public void resetAccessToAcl()
```

##### `resetAccessToBucket` <a name="resetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.resetAccessToBucket"></a>

```java
public void resetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucketInput">accessToBucketInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucket">accessToBucket</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAclInput"></a>

```java
public java.util.List<java.lang.String> getAccessToAclInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToBucketInput`<sup>Optional</sup> <a name="accessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucketInput"></a>

```java
public java.util.List<java.lang.String> getAccessToBucketInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToBucket`<sup>Required</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.accessToBucket"></a>

```java
public java.util.List<java.lang.String> getAccessToBucket();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermissionOutputReference.property.internalValue"></a>

```java
public ObsBucketAclLogDeliveryUserPermission getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclLogDeliveryUserPermission">ObsBucketAclLogDeliveryUserPermission</a>

---


### ObsBucketAclOwnerPermissionOutputReference <a name="ObsBucketAclOwnerPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclOwnerPermissionOutputReference;

new ObsBucketAclOwnerPermissionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToBucket">resetAccessToBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToAcl"></a>

```java
public void resetAccessToAcl()
```

##### `resetAccessToBucket` <a name="resetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.resetAccessToBucket"></a>

```java
public void resetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucketInput">accessToBucketInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucket">accessToBucket</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAclInput"></a>

```java
public java.util.List<java.lang.String> getAccessToAclInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToBucketInput`<sup>Optional</sup> <a name="accessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucketInput"></a>

```java
public java.util.List<java.lang.String> getAccessToBucketInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToBucket`<sup>Required</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.accessToBucket"></a>

```java
public java.util.List<java.lang.String> getAccessToBucket();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermissionOutputReference.property.internalValue"></a>

```java
public ObsBucketAclOwnerPermission getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclOwnerPermission">ObsBucketAclOwnerPermission</a>

---


### ObsBucketAclPublicPermissionOutputReference <a name="ObsBucketAclPublicPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.obs_bucket_acl.ObsBucketAclPublicPermissionOutputReference;

new ObsBucketAclPublicPermissionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToAcl">resetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToBucket">resetAccessToBucket</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToAcl` <a name="resetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToAcl"></a>

```java
public void resetAccessToAcl()
```

##### `resetAccessToBucket` <a name="resetAccessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.resetAccessToBucket"></a>

```java
public void resetAccessToBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAclInput">accessToAclInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucketInput">accessToBucketInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAcl">accessToAcl</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucket">accessToBucket</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessToAclInput`<sup>Optional</sup> <a name="accessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAclInput"></a>

```java
public java.util.List<java.lang.String> getAccessToAclInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToBucketInput`<sup>Optional</sup> <a name="accessToBucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucketInput"></a>

```java
public java.util.List<java.lang.String> getAccessToBucketInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToAcl`<sup>Required</sup> <a name="accessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToAcl"></a>

```java
public java.util.List<java.lang.String> getAccessToAcl();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessToBucket`<sup>Required</sup> <a name="accessToBucket" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.accessToBucket"></a>

```java
public java.util.List<java.lang.String> getAccessToBucket();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermissionOutputReference.property.internalValue"></a>

```java
public ObsBucketAclPublicPermission getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketAcl.ObsBucketAclPublicPermission">ObsBucketAclPublicPermission</a>

---



