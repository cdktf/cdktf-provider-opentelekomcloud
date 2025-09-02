# `apigwVpcChannelV2` Submodule <a name="`apigwVpcChannelV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwVpcChannelV2 <a name="ApigwVpcChannelV2" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2 opentelekomcloud_apigw_vpc_channel_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2(Construct Scope, string Id, ApigwVpcChannelV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config">ApigwVpcChannelV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config">ApigwVpcChannelV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMember">PutMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMemberGroup">PutMemberGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMicroservice">PutMicroservice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMember">ResetMember</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMemberGroup">ResetMemberGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMemberType">ResetMemberType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMicroservice">ResetMicroservice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putHealthCheck"></a>

```csharp
private void PutHealthCheck(ApigwVpcChannelV2HealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a>

---

##### `PutMember` <a name="PutMember" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMember"></a>

```csharp
private void PutMember(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMember.parameter.value"></a>

- *Type:* object

---

##### `PutMemberGroup` <a name="PutMemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMemberGroup"></a>

```csharp
private void PutMemberGroup(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMemberGroup.parameter.value"></a>

- *Type:* object

---

##### `PutMicroservice` <a name="PutMicroservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMicroservice"></a>

```csharp
private void PutMicroservice(ApigwVpcChannelV2Microservice Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.putMicroservice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a>

---

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMember` <a name="ResetMember" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMember"></a>

```csharp
private void ResetMember()
```

##### `ResetMemberGroup` <a name="ResetMemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMemberGroup"></a>

```csharp
private void ResetMemberGroup()
```

##### `ResetMemberType` <a name="ResetMemberType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMemberType"></a>

```csharp
private void ResetMemberType()
```

##### `ResetMicroservice` <a name="ResetMicroservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetMicroservice"></a>

```csharp
private void ResetMicroservice()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwVpcChannelV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwVpcChannelV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwVpcChannelV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwVpcChannelV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

ApigwVpcChannelV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigwVpcChannelV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigwVpcChannelV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigwVpcChannelV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigwVpcChannelV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference">ApigwVpcChannelV2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.member">Member</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList">ApigwVpcChannelV2MemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberGroup">MemberGroup</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList">ApigwVpcChannelV2MemberGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.microservice">Microservice</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference">ApigwVpcChannelV2MicroserviceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lbAlgorithmInput">LbAlgorithmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberGroupInput">MemberGroupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberInput">MemberInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberTypeInput">MemberTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.microserviceInput">MicroserviceInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.typeInput">TypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lbAlgorithm">LbAlgorithm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberType">MemberType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.type">Type</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.healthCheck"></a>

```csharp
public ApigwVpcChannelV2HealthCheckOutputReference HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference">ApigwVpcChannelV2HealthCheckOutputReference</a>

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.member"></a>

```csharp
public ApigwVpcChannelV2MemberList Member { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList">ApigwVpcChannelV2MemberList</a>

---

##### `MemberGroup`<sup>Required</sup> <a name="MemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberGroup"></a>

```csharp
public ApigwVpcChannelV2MemberGroupList MemberGroup { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList">ApigwVpcChannelV2MemberGroupList</a>

---

##### `Microservice`<sup>Required</sup> <a name="Microservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.microservice"></a>

```csharp
public ApigwVpcChannelV2MicroserviceOutputReference Microservice { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference">ApigwVpcChannelV2MicroserviceOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.healthCheckInput"></a>

```csharp
public ApigwVpcChannelV2HealthCheck HealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LbAlgorithmInput`<sup>Optional</sup> <a name="LbAlgorithmInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lbAlgorithmInput"></a>

```csharp
public double LbAlgorithmInput { get; }
```

- *Type:* double

---

##### `MemberGroupInput`<sup>Optional</sup> <a name="MemberGroupInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberGroupInput"></a>

```csharp
public object MemberGroupInput { get; }
```

- *Type:* object

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberInput"></a>

```csharp
public object MemberInput { get; }
```

- *Type:* object

---

##### `MemberTypeInput`<sup>Optional</sup> <a name="MemberTypeInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberTypeInput"></a>

```csharp
public string MemberTypeInput { get; }
```

- *Type:* string

---

##### `MicroserviceInput`<sup>Optional</sup> <a name="MicroserviceInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.microserviceInput"></a>

```csharp
public ApigwVpcChannelV2Microservice MicroserviceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.typeInput"></a>

```csharp
public double TypeInput { get; }
```

- *Type:* double

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LbAlgorithm`<sup>Required</sup> <a name="LbAlgorithm" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.lbAlgorithm"></a>

```csharp
public double LbAlgorithm { get; }
```

- *Type:* double

---

##### `MemberType`<sup>Required</sup> <a name="MemberType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.memberType"></a>

```csharp
public string MemberType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.type"></a>

```csharp
public double Type { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwVpcChannelV2Config <a name="ApigwVpcChannelV2Config" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GatewayId,
    double LbAlgorithm,
    string Name,
    double Port,
    ApigwVpcChannelV2HealthCheck HealthCheck = null,
    string Id = null,
    object Member = null,
    object MemberGroup = null,
    string MemberType = null,
    ApigwVpcChannelV2Microservice Microservice = null,
    double Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#gateway_id ApigwVpcChannelV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.lbAlgorithm">LbAlgorithm</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#lb_algorithm ApigwVpcChannelV2#lb_algorithm}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#id ApigwVpcChannelV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.member">Member</a></code> | <code>object</code> | member block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.memberGroup">MemberGroup</a></code> | <code>object</code> | member_group block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.memberType">MemberType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#member_type ApigwVpcChannelV2#member_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.microservice">Microservice</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a></code> | microservice block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.type">Type</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#type ApigwVpcChannelV2#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#gateway_id ApigwVpcChannelV2#gateway_id}.

---

##### `LbAlgorithm`<sup>Required</sup> <a name="LbAlgorithm" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.lbAlgorithm"></a>

```csharp
public double LbAlgorithm { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#lb_algorithm ApigwVpcChannelV2#lb_algorithm}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}.

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.healthCheck"></a>

```csharp
public ApigwVpcChannelV2HealthCheck HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#health_check ApigwVpcChannelV2#health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#id ApigwVpcChannelV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Member`<sup>Optional</sup> <a name="Member" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.member"></a>

```csharp
public object Member { get; set; }
```

- *Type:* object

member block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#member ApigwVpcChannelV2#member}

---

##### `MemberGroup`<sup>Optional</sup> <a name="MemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.memberGroup"></a>

```csharp
public object MemberGroup { get; set; }
```

- *Type:* object

member_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#member_group ApigwVpcChannelV2#member_group}

---

##### `MemberType`<sup>Optional</sup> <a name="MemberType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.memberType"></a>

```csharp
public string MemberType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#member_type ApigwVpcChannelV2#member_type}.

---

##### `Microservice`<sup>Optional</sup> <a name="Microservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.microservice"></a>

```csharp
public ApigwVpcChannelV2Microservice Microservice { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a>

microservice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#microservice ApigwVpcChannelV2#microservice}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Config.property.type"></a>

```csharp
public double Type { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#type ApigwVpcChannelV2#type}.

---

### ApigwVpcChannelV2HealthCheck <a name="ApigwVpcChannelV2HealthCheck" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2HealthCheck {
    double Interval,
    string Protocol,
    double ThresholdAbnormal,
    double ThresholdNormal,
    double Timeout,
    object EnableClientSsl = null,
    string HttpCodes = null,
    string Method = null,
    string Path = null,
    double Port = null,
    double Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.interval">Interval</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#interval ApigwVpcChannelV2#interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#protocol ApigwVpcChannelV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.thresholdAbnormal">ThresholdAbnormal</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#threshold_abnormal ApigwVpcChannelV2#threshold_abnormal}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.thresholdNormal">ThresholdNormal</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#threshold_normal ApigwVpcChannelV2#threshold_normal}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#timeout ApigwVpcChannelV2#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.enableClientSsl">EnableClientSsl</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#enable_client_ssl ApigwVpcChannelV2#enable_client_ssl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.httpCodes">HttpCodes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#http_codes ApigwVpcChannelV2#http_codes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.method">Method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#method ApigwVpcChannelV2#method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#path ApigwVpcChannelV2#path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.status">Status</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#status ApigwVpcChannelV2#status}. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#interval ApigwVpcChannelV2#interval}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#protocol ApigwVpcChannelV2#protocol}.

---

##### `ThresholdAbnormal`<sup>Required</sup> <a name="ThresholdAbnormal" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.thresholdAbnormal"></a>

```csharp
public double ThresholdAbnormal { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#threshold_abnormal ApigwVpcChannelV2#threshold_abnormal}.

---

##### `ThresholdNormal`<sup>Required</sup> <a name="ThresholdNormal" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.thresholdNormal"></a>

```csharp
public double ThresholdNormal { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#threshold_normal ApigwVpcChannelV2#threshold_normal}.

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#timeout ApigwVpcChannelV2#timeout}.

---

##### `EnableClientSsl`<sup>Optional</sup> <a name="EnableClientSsl" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.enableClientSsl"></a>

```csharp
public object EnableClientSsl { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#enable_client_ssl ApigwVpcChannelV2#enable_client_ssl}.

---

##### `HttpCodes`<sup>Optional</sup> <a name="HttpCodes" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.httpCodes"></a>

```csharp
public string HttpCodes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#http_codes ApigwVpcChannelV2#http_codes}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#method ApigwVpcChannelV2#method}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#path ApigwVpcChannelV2#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck.property.status"></a>

```csharp
public double Status { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#status ApigwVpcChannelV2#status}.

---

### ApigwVpcChannelV2Member <a name="ApigwVpcChannelV2Member" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2Member {
    string GroupName = null,
    string Host = null,
    string Id = null,
    object IsBackup = null,
    string Name = null,
    double Port = null,
    double Status = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.groupName">GroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#group_name ApigwVpcChannelV2#group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#host ApigwVpcChannelV2#host}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#id ApigwVpcChannelV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.isBackup">IsBackup</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#is_backup ApigwVpcChannelV2#is_backup}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.status">Status</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#status ApigwVpcChannelV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#weight ApigwVpcChannelV2#weight}. |

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.groupName"></a>

```csharp
public string GroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#group_name ApigwVpcChannelV2#group_name}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#host ApigwVpcChannelV2#host}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#id ApigwVpcChannelV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsBackup`<sup>Optional</sup> <a name="IsBackup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.isBackup"></a>

```csharp
public object IsBackup { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#is_backup ApigwVpcChannelV2#is_backup}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#port ApigwVpcChannelV2#port}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.status"></a>

```csharp
public double Status { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#status ApigwVpcChannelV2#status}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Member.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#weight ApigwVpcChannelV2#weight}.

---

### ApigwVpcChannelV2MemberGroup <a name="ApigwVpcChannelV2MemberGroup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MemberGroup {
    string Name,
    string Description = null,
    double MicroservicePort = null,
    System.Collections.Generic.IDictionary<string, string> MicroserviceTags = null,
    string MicroserviceVersion = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#description ApigwVpcChannelV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microservicePort">MicroservicePort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#microservice_port ApigwVpcChannelV2#microservice_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microserviceTags">MicroserviceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#microservice_tags ApigwVpcChannelV2#microservice_tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microserviceVersion">MicroserviceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#microservice_version ApigwVpcChannelV2#microservice_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#weight ApigwVpcChannelV2#weight}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#name ApigwVpcChannelV2#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#description ApigwVpcChannelV2#description}.

---

##### `MicroservicePort`<sup>Optional</sup> <a name="MicroservicePort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microservicePort"></a>

```csharp
public double MicroservicePort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#microservice_port ApigwVpcChannelV2#microservice_port}.

---

##### `MicroserviceTags`<sup>Optional</sup> <a name="MicroserviceTags" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microserviceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MicroserviceTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#microservice_tags ApigwVpcChannelV2#microservice_tags}.

---

##### `MicroserviceVersion`<sup>Optional</sup> <a name="MicroserviceVersion" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.microserviceVersion"></a>

```csharp
public string MicroserviceVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#microservice_version ApigwVpcChannelV2#microservice_version}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroup.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#weight ApigwVpcChannelV2#weight}.

---

### ApigwVpcChannelV2Microservice <a name="ApigwVpcChannelV2Microservice" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2Microservice {
    ApigwVpcChannelV2MicroserviceCceConfig CceConfig = null,
    ApigwVpcChannelV2MicroserviceCseConfig CseConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.property.cceConfig">CceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a></code> | cce_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.property.cseConfig">CseConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a></code> | cse_config block. |

---

##### `CceConfig`<sup>Optional</sup> <a name="CceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.property.cceConfig"></a>

```csharp
public ApigwVpcChannelV2MicroserviceCceConfig CceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a>

cce_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#cce_config ApigwVpcChannelV2#cce_config}

---

##### `CseConfig`<sup>Optional</sup> <a name="CseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice.property.cseConfig"></a>

```csharp
public ApigwVpcChannelV2MicroserviceCseConfig CseConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a>

cse_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#cse_config ApigwVpcChannelV2#cse_config}

---

### ApigwVpcChannelV2MicroserviceCceConfig <a name="ApigwVpcChannelV2MicroserviceCceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MicroserviceCceConfig {
    string ClusterId,
    string Namespace,
    string WorkloadType,
    string LabelKey = null,
    string LabelValue = null,
    string WorkloadName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#cluster_id ApigwVpcChannelV2#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#namespace ApigwVpcChannelV2#namespace}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.workloadType">WorkloadType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#workload_type ApigwVpcChannelV2#workload_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.labelKey">LabelKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#label_key ApigwVpcChannelV2#label_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.labelValue">LabelValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#label_value ApigwVpcChannelV2#label_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.workloadName">WorkloadName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#workload_name ApigwVpcChannelV2#workload_name}. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#cluster_id ApigwVpcChannelV2#cluster_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#namespace ApigwVpcChannelV2#namespace}.

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.workloadType"></a>

```csharp
public string WorkloadType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#workload_type ApigwVpcChannelV2#workload_type}.

---

##### `LabelKey`<sup>Optional</sup> <a name="LabelKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.labelKey"></a>

```csharp
public string LabelKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#label_key ApigwVpcChannelV2#label_key}.

---

##### `LabelValue`<sup>Optional</sup> <a name="LabelValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.labelValue"></a>

```csharp
public string LabelValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#label_value ApigwVpcChannelV2#label_value}.

---

##### `WorkloadName`<sup>Optional</sup> <a name="WorkloadName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig.property.workloadName"></a>

```csharp
public string WorkloadName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#workload_name ApigwVpcChannelV2#workload_name}.

---

### ApigwVpcChannelV2MicroserviceCseConfig <a name="ApigwVpcChannelV2MicroserviceCseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MicroserviceCseConfig {
    string EngineId,
    string ServiceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.property.engineId">EngineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#engine_id ApigwVpcChannelV2#engine_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.property.serviceId">ServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#service_id ApigwVpcChannelV2#service_id}. |

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.property.engineId"></a>

```csharp
public string EngineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#engine_id ApigwVpcChannelV2#engine_id}.

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/apigw_vpc_channel_v2#service_id ApigwVpcChannelV2#service_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwVpcChannelV2HealthCheckOutputReference <a name="ApigwVpcChannelV2HealthCheckOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2HealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetEnableClientSsl">ResetEnableClientSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetHttpCodes">ResetHttpCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableClientSsl` <a name="ResetEnableClientSsl" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetEnableClientSsl"></a>

```csharp
private void ResetEnableClientSsl()
```

##### `ResetHttpCodes` <a name="ResetHttpCodes" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetHttpCodes"></a>

```csharp
private void ResetHttpCodes()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.enableClientSslInput">EnableClientSslInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.httpCodesInput">HttpCodesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.statusInput">StatusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdAbnormalInput">ThresholdAbnormalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdNormalInput">ThresholdNormalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.enableClientSsl">EnableClientSsl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.httpCodes">HttpCodes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdAbnormal">ThresholdAbnormal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdNormal">ThresholdNormal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableClientSslInput`<sup>Optional</sup> <a name="EnableClientSslInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.enableClientSslInput"></a>

```csharp
public object EnableClientSslInput { get; }
```

- *Type:* object

---

##### `HttpCodesInput`<sup>Optional</sup> <a name="HttpCodesInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.httpCodesInput"></a>

```csharp
public string HttpCodesInput { get; }
```

- *Type:* string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.statusInput"></a>

```csharp
public double StatusInput { get; }
```

- *Type:* double

---

##### `ThresholdAbnormalInput`<sup>Optional</sup> <a name="ThresholdAbnormalInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdAbnormalInput"></a>

```csharp
public double ThresholdAbnormalInput { get; }
```

- *Type:* double

---

##### `ThresholdNormalInput`<sup>Optional</sup> <a name="ThresholdNormalInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdNormalInput"></a>

```csharp
public double ThresholdNormalInput { get; }
```

- *Type:* double

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `EnableClientSsl`<sup>Required</sup> <a name="EnableClientSsl" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.enableClientSsl"></a>

```csharp
public object EnableClientSsl { get; }
```

- *Type:* object

---

##### `HttpCodes`<sup>Required</sup> <a name="HttpCodes" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.httpCodes"></a>

```csharp
public string HttpCodes { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `ThresholdAbnormal`<sup>Required</sup> <a name="ThresholdAbnormal" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdAbnormal"></a>

```csharp
public double ThresholdAbnormal { get; }
```

- *Type:* double

---

##### `ThresholdNormal`<sup>Required</sup> <a name="ThresholdNormal" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.thresholdNormal"></a>

```csharp
public double ThresholdNormal { get; }
```

- *Type:* double

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheckOutputReference.property.internalValue"></a>

```csharp
public ApigwVpcChannelV2HealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2HealthCheck">ApigwVpcChannelV2HealthCheck</a>

---


### ApigwVpcChannelV2MemberGroupList <a name="ApigwVpcChannelV2MemberGroupList" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MemberGroupList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.get"></a>

```csharp
private ApigwVpcChannelV2MemberGroupOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigwVpcChannelV2MemberGroupOutputReference <a name="ApigwVpcChannelV2MemberGroupOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MemberGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroservicePort">ResetMicroservicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroserviceTags">ResetMicroserviceTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroserviceVersion">ResetMicroserviceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMicroservicePort` <a name="ResetMicroservicePort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroservicePort"></a>

```csharp
private void ResetMicroservicePort()
```

##### `ResetMicroserviceTags` <a name="ResetMicroserviceTags" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroserviceTags"></a>

```csharp
private void ResetMicroserviceTags()
```

##### `ResetMicroserviceVersion` <a name="ResetMicroserviceVersion" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetMicroserviceVersion"></a>

```csharp
private void ResetMicroserviceVersion()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microservicePortInput">MicroservicePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceTagsInput">MicroserviceTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceVersionInput">MicroserviceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microservicePort">MicroservicePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceTags">MicroserviceTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceVersion">MicroserviceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MicroservicePortInput`<sup>Optional</sup> <a name="MicroservicePortInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microservicePortInput"></a>

```csharp
public double MicroservicePortInput { get; }
```

- *Type:* double

---

##### `MicroserviceTagsInput`<sup>Optional</sup> <a name="MicroserviceTagsInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MicroserviceTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MicroserviceVersionInput`<sup>Optional</sup> <a name="MicroserviceVersionInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceVersionInput"></a>

```csharp
public string MicroserviceVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MicroservicePort`<sup>Required</sup> <a name="MicroservicePort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microservicePort"></a>

```csharp
public double MicroservicePort { get; }
```

- *Type:* double

---

##### `MicroserviceTags`<sup>Required</sup> <a name="MicroserviceTags" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MicroserviceTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MicroserviceVersion`<sup>Required</sup> <a name="MicroserviceVersion" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.microserviceVersion"></a>

```csharp
public string MicroserviceVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberGroupOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigwVpcChannelV2MemberList <a name="ApigwVpcChannelV2MemberList" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MemberList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.get"></a>

```csharp
private ApigwVpcChannelV2MemberOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigwVpcChannelV2MemberOutputReference <a name="ApigwVpcChannelV2MemberOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MemberOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetIsBackup">ResetIsBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetGroupName"></a>

```csharp
private void ResetGroupName()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsBackup` <a name="ResetIsBackup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetIsBackup"></a>

```csharp
private void ResetIsBackup()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.groupNameInput">GroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.isBackupInput">IsBackupInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.statusInput">StatusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.isBackup">IsBackup</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.status">Status</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.groupNameInput"></a>

```csharp
public string GroupNameInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsBackupInput`<sup>Optional</sup> <a name="IsBackupInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.isBackupInput"></a>

```csharp
public object IsBackupInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.statusInput"></a>

```csharp
public double StatusInput { get; }
```

- *Type:* double

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsBackup`<sup>Required</sup> <a name="IsBackup" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.isBackup"></a>

```csharp
public object IsBackup { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.status"></a>

```csharp
public double Status { get; }
```

- *Type:* double

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MemberOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigwVpcChannelV2MicroserviceCceConfigOutputReference <a name="ApigwVpcChannelV2MicroserviceCceConfigOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MicroserviceCceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetLabelKey">ResetLabelKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetLabelValue">ResetLabelValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetWorkloadName">ResetWorkloadName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelKey` <a name="ResetLabelKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetLabelKey"></a>

```csharp
private void ResetLabelKey()
```

##### `ResetLabelValue` <a name="ResetLabelValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetLabelValue"></a>

```csharp
private void ResetLabelValue()
```

##### `ResetWorkloadName` <a name="ResetWorkloadName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.resetWorkloadName"></a>

```csharp
private void ResetWorkloadName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelKeyInput">LabelKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelValueInput">LabelValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadNameInput">WorkloadNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadTypeInput">WorkloadTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelKey">LabelKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelValue">LabelValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadName">WorkloadName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadType">WorkloadType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `LabelKeyInput`<sup>Optional</sup> <a name="LabelKeyInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelKeyInput"></a>

```csharp
public string LabelKeyInput { get; }
```

- *Type:* string

---

##### `LabelValueInput`<sup>Optional</sup> <a name="LabelValueInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelValueInput"></a>

```csharp
public string LabelValueInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `WorkloadNameInput`<sup>Optional</sup> <a name="WorkloadNameInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadNameInput"></a>

```csharp
public string WorkloadNameInput { get; }
```

- *Type:* string

---

##### `WorkloadTypeInput`<sup>Optional</sup> <a name="WorkloadTypeInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadTypeInput"></a>

```csharp
public string WorkloadTypeInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `LabelKey`<sup>Required</sup> <a name="LabelKey" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelKey"></a>

```csharp
public string LabelKey { get; }
```

- *Type:* string

---

##### `LabelValue`<sup>Required</sup> <a name="LabelValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.labelValue"></a>

```csharp
public string LabelValue { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `WorkloadName`<sup>Required</sup> <a name="WorkloadName" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadName"></a>

```csharp
public string WorkloadName { get; }
```

- *Type:* string

---

##### `WorkloadType`<sup>Required</sup> <a name="WorkloadType" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.workloadType"></a>

```csharp
public string WorkloadType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference.property.internalValue"></a>

```csharp
public ApigwVpcChannelV2MicroserviceCceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a>

---


### ApigwVpcChannelV2MicroserviceCseConfigOutputReference <a name="ApigwVpcChannelV2MicroserviceCseConfigOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MicroserviceCseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.engineIdInput">EngineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.engineId">EngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.engineIdInput"></a>

```csharp
public string EngineIdInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.engineId"></a>

```csharp
public string EngineId { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference.property.internalValue"></a>

```csharp
public ApigwVpcChannelV2MicroserviceCseConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a>

---


### ApigwVpcChannelV2MicroserviceOutputReference <a name="ApigwVpcChannelV2MicroserviceOutputReference" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new ApigwVpcChannelV2MicroserviceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCceConfig">PutCceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCseConfig">PutCseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resetCceConfig">ResetCceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resetCseConfig">ResetCseConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCceConfig` <a name="PutCceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCceConfig"></a>

```csharp
private void PutCceConfig(ApigwVpcChannelV2MicroserviceCceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a>

---

##### `PutCseConfig` <a name="PutCseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCseConfig"></a>

```csharp
private void PutCseConfig(ApigwVpcChannelV2MicroserviceCseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.putCseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a>

---

##### `ResetCceConfig` <a name="ResetCceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resetCceConfig"></a>

```csharp
private void ResetCceConfig()
```

##### `ResetCseConfig` <a name="ResetCseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.resetCseConfig"></a>

```csharp
private void ResetCseConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cceConfig">CceConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference">ApigwVpcChannelV2MicroserviceCceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cseConfig">CseConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference">ApigwVpcChannelV2MicroserviceCseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cceConfigInput">CceConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cseConfigInput">CseConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CceConfig`<sup>Required</sup> <a name="CceConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cceConfig"></a>

```csharp
public ApigwVpcChannelV2MicroserviceCceConfigOutputReference CceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfigOutputReference">ApigwVpcChannelV2MicroserviceCceConfigOutputReference</a>

---

##### `CseConfig`<sup>Required</sup> <a name="CseConfig" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cseConfig"></a>

```csharp
public ApigwVpcChannelV2MicroserviceCseConfigOutputReference CseConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfigOutputReference">ApigwVpcChannelV2MicroserviceCseConfigOutputReference</a>

---

##### `CceConfigInput`<sup>Optional</sup> <a name="CceConfigInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cceConfigInput"></a>

```csharp
public ApigwVpcChannelV2MicroserviceCceConfig CceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCceConfig">ApigwVpcChannelV2MicroserviceCceConfig</a>

---

##### `CseConfigInput`<sup>Optional</sup> <a name="CseConfigInput" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.cseConfigInput"></a>

```csharp
public ApigwVpcChannelV2MicroserviceCseConfig CseConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceCseConfig">ApigwVpcChannelV2MicroserviceCseConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2MicroserviceOutputReference.property.internalValue"></a>

```csharp
public ApigwVpcChannelV2Microservice InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwVpcChannelV2.ApigwVpcChannelV2Microservice">ApigwVpcChannelV2Microservice</a>

---



