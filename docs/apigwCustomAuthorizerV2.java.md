# `apigwCustomAuthorizerV2` Submodule <a name="`apigwCustomAuthorizerV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwCustomAuthorizerV2 <a name="ApigwCustomAuthorizerV2" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2 opentelekomcloud_apigw_custom_authorizer_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_custom_authorizer_v2.ApigwCustomAuthorizerV2;

ApigwCustomAuthorizerV2.Builder.create(Construct scope, java.lang.String id)
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
    .functionUrn(java.lang.String)
    .gatewayId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .identity(IResolvable)
//  .identity(java.util.List<ApigwCustomAuthorizerV2Identity>)
//  .isBodySend(java.lang.Boolean)
//  .isBodySend(IResolvable)
//  .ttl(java.lang.Number)
//  .type(java.lang.String)
//  .userData(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.functionUrn">functionUrn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.identity">identity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>></code> | identity block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.isBodySend">isBodySend</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.functionUrn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.gatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.identity"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#identity ApigwCustomAuthorizerV2#identity}

---

##### `isBodySend`<sup>Optional</sup> <a name="isBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.isBodySend"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.Initializer.parameter.userData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIsBodySend">resetIsBodySend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity"></a>

```java
public void putIdentity(IResolvable OR java.util.List<ApigwCustomAuthorizerV2Identity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.putIdentity.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetId"></a>

```java
public void resetId()
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIdentity"></a>

```java
public void resetIdentity()
```

##### `resetIsBodySend` <a name="resetIsBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetIsBodySend"></a>

```java
public void resetIsBodySend()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetType"></a>

```java
public void resetType()
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.resetUserData"></a>

```java
public void resetUserData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwCustomAuthorizerV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_custom_authorizer_v2.ApigwCustomAuthorizerV2;

ApigwCustomAuthorizerV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_custom_authorizer_v2.ApigwCustomAuthorizerV2;

ApigwCustomAuthorizerV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_custom_authorizer_v2.ApigwCustomAuthorizerV2;

ApigwCustomAuthorizerV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_custom_authorizer_v2.ApigwCustomAuthorizerV2;

ApigwCustomAuthorizerV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApigwCustomAuthorizerV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApigwCustomAuthorizerV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApigwCustomAuthorizerV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApigwCustomAuthorizerV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApigwCustomAuthorizerV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList">ApigwCustomAuthorizerV2IdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrnInput">functionUrnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identityInput">identityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySendInput">isBodySendInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userDataInput">userDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrn">functionUrn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySend">isBodySend</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identity"></a>

```java
public ApigwCustomAuthorizerV2IdentityList getIdentity();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList">ApigwCustomAuthorizerV2IdentityList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `functionUrnInput`<sup>Optional</sup> <a name="functionUrnInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrnInput"></a>

```java
public java.lang.String getFunctionUrnInput();
```

- *Type:* java.lang.String

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.identityInput"></a>

```java
public java.lang.Object getIdentityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isBodySendInput`<sup>Optional</sup> <a name="isBodySendInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySendInput"></a>

```java
public java.lang.Object getIsBodySendInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userDataInput"></a>

```java
public java.lang.String getUserDataInput();
```

- *Type:* java.lang.String

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.functionUrn"></a>

```java
public java.lang.String getFunctionUrn();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isBodySend`<sup>Required</sup> <a name="isBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.isBodySend"></a>

```java
public java.lang.Object getIsBodySend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwCustomAuthorizerV2Config <a name="ApigwCustomAuthorizerV2Config" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_custom_authorizer_v2.ApigwCustomAuthorizerV2Config;

ApigwCustomAuthorizerV2Config.builder()
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
    .functionUrn(java.lang.String)
    .gatewayId(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .identity(IResolvable)
//  .identity(java.util.List<ApigwCustomAuthorizerV2Identity>)
//  .isBodySend(java.lang.Boolean)
//  .isBodySend(IResolvable)
//  .ttl(java.lang.Number)
//  .type(java.lang.String)
//  .userData(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.functionUrn">functionUrn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.identity">identity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>></code> | identity block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.isBodySend">isBodySend</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.userData">userData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.functionUrn"></a>

```java
public java.lang.String getFunctionUrn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#function_urn ApigwCustomAuthorizerV2#function_urn}.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#gateway_id ApigwCustomAuthorizerV2#gateway_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#id ApigwCustomAuthorizerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.identity"></a>

```java
public java.lang.Object getIdentity();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#identity ApigwCustomAuthorizerV2#identity}

---

##### `isBodySend`<sup>Optional</sup> <a name="isBodySend" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.isBodySend"></a>

```java
public java.lang.Object getIsBodySend();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#is_body_send ApigwCustomAuthorizerV2#is_body_send}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#ttl ApigwCustomAuthorizerV2#ttl}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#type ApigwCustomAuthorizerV2#type}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Config.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#user_data ApigwCustomAuthorizerV2#user_data}.

---

### ApigwCustomAuthorizerV2Identity <a name="ApigwCustomAuthorizerV2Identity" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_custom_authorizer_v2.ApigwCustomAuthorizerV2Identity;

ApigwCustomAuthorizerV2Identity.builder()
    .location(java.lang.String)
    .name(java.lang.String)
//  .validation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#location ApigwCustomAuthorizerV2#location}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.validation">validation</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#validation ApigwCustomAuthorizerV2#validation}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#location ApigwCustomAuthorizerV2#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#name ApigwCustomAuthorizerV2#name}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.44/docs/resources/apigw_custom_authorizer_v2#validation ApigwCustomAuthorizerV2#validation}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwCustomAuthorizerV2IdentityList <a name="ApigwCustomAuthorizerV2IdentityList" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_custom_authorizer_v2.ApigwCustomAuthorizerV2IdentityList;

new ApigwCustomAuthorizerV2IdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get"></a>

```java
public ApigwCustomAuthorizerV2IdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>>

---


### ApigwCustomAuthorizerV2IdentityOutputReference <a name="ApigwCustomAuthorizerV2IdentityOutputReference" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.apigw_custom_authorizer_v2.ApigwCustomAuthorizerV2IdentityOutputReference;

new ApigwCustomAuthorizerV2IdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidation` <a name="resetValidation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.resetValidation"></a>

```java
public void resetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validationInput">validationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validation">validation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validationInput"></a>

```java
public java.lang.String getValidationInput();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2IdentityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.apigwCustomAuthorizerV2.ApigwCustomAuthorizerV2Identity">ApigwCustomAuthorizerV2Identity</a>

---



