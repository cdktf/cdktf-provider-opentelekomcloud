# `ctsEventNotificationV3` Submodule <a name="`ctsEventNotificationV3` Submodule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CtsEventNotificationV3 <a name="CtsEventNotificationV3" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3 opentelekomcloud_cts_event_notification_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3(Construct Scope, string Id, CtsEventNotificationV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config">CtsEventNotificationV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config">CtsEventNotificationV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList">PutNotifyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetNotifyUserList">ResetNotifyUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetTopicId">ResetTopicId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putFilter"></a>

```csharp
private void PutFilter(CtsEventNotificationV3Filter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

---

##### `PutNotifyUserList` <a name="PutNotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList"></a>

```csharp
private void PutNotifyUserList(IResolvable|CtsEventNotificationV3NotifyUserListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putNotifyUserList.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>[]

---

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations"></a>

```csharp
private void PutOperations(IResolvable|CtsEventNotificationV3Operations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.putOperations.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotifyUserList` <a name="ResetNotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetNotifyUserList"></a>

```csharp
private void ResetNotifyUserList()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetOperations"></a>

```csharp
private void ResetOperations()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTopicId` <a name="ResetTopicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.resetTopicId"></a>

```csharp
private void ResetTopicId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CtsEventNotificationV3 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CtsEventNotificationV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CtsEventNotificationV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CtsEventNotificationV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

CtsEventNotificationV3.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CtsEventNotificationV3 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CtsEventNotificationV3 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CtsEventNotificationV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CtsEventNotificationV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.createTime">CreateTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference">CtsEventNotificationV3FilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationId">NotificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationType">NotificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserList">NotifyUserList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList">CtsEventNotificationV3NotifyUserListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList">CtsEventNotificationV3OperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationNameInput">NotificationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserListInput">NotifyUserListInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationsInput">OperationsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationTypeInput">OperationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicIdInput">TopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationName">NotificationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationType">OperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicId">TopicId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.createTime"></a>

```csharp
public double CreateTime { get; }
```

- *Type:* double

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filter"></a>

```csharp
public CtsEventNotificationV3FilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference">CtsEventNotificationV3FilterOutputReference</a>

---

##### `NotificationId`<sup>Required</sup> <a name="NotificationId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationId"></a>

```csharp
public string NotificationId { get; }
```

- *Type:* string

---

##### `NotificationType`<sup>Required</sup> <a name="NotificationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationType"></a>

```csharp
public string NotificationType { get; }
```

- *Type:* string

---

##### `NotifyUserList`<sup>Required</sup> <a name="NotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserList"></a>

```csharp
public CtsEventNotificationV3NotifyUserListStructList NotifyUserList { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList">CtsEventNotificationV3NotifyUserListStructList</a>

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operations"></a>

```csharp
public CtsEventNotificationV3OperationsList Operations { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList">CtsEventNotificationV3OperationsList</a>

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.filterInput"></a>

```csharp
public CtsEventNotificationV3Filter FilterInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotificationNameInput`<sup>Optional</sup> <a name="NotificationNameInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationNameInput"></a>

```csharp
public string NotificationNameInput { get; }
```

- *Type:* string

---

##### `NotifyUserListInput`<sup>Optional</sup> <a name="NotifyUserListInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notifyUserListInput"></a>

```csharp
public IResolvable|CtsEventNotificationV3NotifyUserListStruct[] NotifyUserListInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>[]

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationsInput"></a>

```csharp
public IResolvable|CtsEventNotificationV3Operations[] OperationsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]

---

##### `OperationTypeInput`<sup>Optional</sup> <a name="OperationTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationTypeInput"></a>

```csharp
public string OperationTypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicIdInput"></a>

```csharp
public string TopicIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationName`<sup>Required</sup> <a name="NotificationName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.notificationName"></a>

```csharp
public string NotificationName { get; }
```

- *Type:* string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.operationType"></a>

```csharp
public string OperationType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.topicId"></a>

```csharp
public string TopicId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CtsEventNotificationV3Config <a name="CtsEventNotificationV3Config" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string NotificationName,
    string OperationType,
    CtsEventNotificationV3Filter Filter = null,
    string Id = null,
    IResolvable|CtsEventNotificationV3NotifyUserListStruct[] NotifyUserList = null,
    IResolvable|CtsEventNotificationV3Operations[] Operations = null,
    string Status = null,
    string TopicId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notificationName">NotificationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operationType">OperationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | filter block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#id CtsEventNotificationV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notifyUserList">NotifyUserList</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>[]</code> | notify_user_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operations">Operations</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]</code> | operations block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#status CtsEventNotificationV3#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.topicId">TopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `NotificationName`<sup>Required</sup> <a name="NotificationName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notificationName"></a>

```csharp
public string NotificationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#notification_name CtsEventNotificationV3#notification_name}.

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operationType"></a>

```csharp
public string OperationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#operation_type CtsEventNotificationV3#operation_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.filter"></a>

```csharp
public CtsEventNotificationV3Filter Filter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#filter CtsEventNotificationV3#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#id CtsEventNotificationV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotifyUserList`<sup>Optional</sup> <a name="NotifyUserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.notifyUserList"></a>

```csharp
public IResolvable|CtsEventNotificationV3NotifyUserListStruct[] NotifyUserList { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>[]

notify_user_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#notify_user_list CtsEventNotificationV3#notify_user_list}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.operations"></a>

```csharp
public IResolvable|CtsEventNotificationV3Operations[] Operations { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#operations CtsEventNotificationV3#operations}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#status CtsEventNotificationV3#status}.

---

##### `TopicId`<sup>Optional</sup> <a name="TopicId" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Config.property.topicId"></a>

```csharp
public string TopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#topic_id CtsEventNotificationV3#topic_id}.

---

### CtsEventNotificationV3Filter <a name="CtsEventNotificationV3Filter" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3Filter {
    string Condition,
    string[] Rule
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#condition CtsEventNotificationV3#condition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.rule">Rule</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#rule CtsEventNotificationV3#rule}. |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#condition CtsEventNotificationV3#condition}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter.property.rule"></a>

```csharp
public string[] Rule { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#rule CtsEventNotificationV3#rule}.

---

### CtsEventNotificationV3NotifyUserListStruct <a name="CtsEventNotificationV3NotifyUserListStruct" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3NotifyUserListStruct {
    string UserGroup,
    string[] UserList
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userGroup">UserGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#user_group CtsEventNotificationV3#user_group}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userList">UserList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#user_list CtsEventNotificationV3#user_list}. |

---

##### `UserGroup`<sup>Required</sup> <a name="UserGroup" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userGroup"></a>

```csharp
public string UserGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#user_group CtsEventNotificationV3#user_group}.

---

##### `UserList`<sup>Required</sup> <a name="UserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct.property.userList"></a>

```csharp
public string[] UserList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#user_list CtsEventNotificationV3#user_list}.

---

### CtsEventNotificationV3Operations <a name="CtsEventNotificationV3Operations" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3Operations {
    string ResourceType,
    string ServiceType,
    string[] TraceNames
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#resource_type CtsEventNotificationV3#resource_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.serviceType">ServiceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#service_type CtsEventNotificationV3#service_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.traceNames">TraceNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#trace_names CtsEventNotificationV3#trace_names}. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#resource_type CtsEventNotificationV3#resource_type}.

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.serviceType"></a>

```csharp
public string ServiceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#service_type CtsEventNotificationV3#service_type}.

---

##### `TraceNames`<sup>Required</sup> <a name="TraceNames" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations.property.traceNames"></a>

```csharp
public string[] TraceNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cts_event_notification_v3#trace_names CtsEventNotificationV3#trace_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### CtsEventNotificationV3FilterOutputReference <a name="CtsEventNotificationV3FilterOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3FilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.ruleInput">RuleInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.rule">Rule</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.ruleInput"></a>

```csharp
public string[] RuleInput { get; }
```

- *Type:* string[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.rule"></a>

```csharp
public string[] Rule { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3FilterOutputReference.property.internalValue"></a>

```csharp
public CtsEventNotificationV3Filter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Filter">CtsEventNotificationV3Filter</a>

---


### CtsEventNotificationV3NotifyUserListStructList <a name="CtsEventNotificationV3NotifyUserListStructList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3NotifyUserListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.get"></a>

```csharp
private CtsEventNotificationV3NotifyUserListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructList.property.internalValue"></a>

```csharp
public IResolvable|CtsEventNotificationV3NotifyUserListStruct[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>[]

---


### CtsEventNotificationV3NotifyUserListStructOutputReference <a name="CtsEventNotificationV3NotifyUserListStructOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3NotifyUserListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroupInput">UserGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userListInput">UserListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroup">UserGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userList">UserList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UserGroupInput`<sup>Optional</sup> <a name="UserGroupInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroupInput"></a>

```csharp
public string UserGroupInput { get; }
```

- *Type:* string

---

##### `UserListInput`<sup>Optional</sup> <a name="UserListInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userListInput"></a>

```csharp
public string[] UserListInput { get; }
```

- *Type:* string[]

---

##### `UserGroup`<sup>Required</sup> <a name="UserGroup" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userGroup"></a>

```csharp
public string UserGroup { get; }
```

- *Type:* string

---

##### `UserList`<sup>Required</sup> <a name="UserList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.userList"></a>

```csharp
public string[] UserList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CtsEventNotificationV3NotifyUserListStruct InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3NotifyUserListStruct">CtsEventNotificationV3NotifyUserListStruct</a>

---


### CtsEventNotificationV3OperationsList <a name="CtsEventNotificationV3OperationsList" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3OperationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get"></a>

```csharp
private CtsEventNotificationV3OperationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsList.property.internalValue"></a>

```csharp
public IResolvable|CtsEventNotificationV3Operations[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>[]

---


### CtsEventNotificationV3OperationsOutputReference <a name="CtsEventNotificationV3OperationsOutputReference" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new CtsEventNotificationV3OperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceTypeInput">ServiceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNamesInput">TraceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceType">ServiceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNames">TraceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ServiceTypeInput`<sup>Optional</sup> <a name="ServiceTypeInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceTypeInput"></a>

```csharp
public string ServiceTypeInput { get; }
```

- *Type:* string

---

##### `TraceNamesInput`<sup>Optional</sup> <a name="TraceNamesInput" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNamesInput"></a>

```csharp
public string[] TraceNamesInput { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.serviceType"></a>

```csharp
public string ServiceType { get; }
```

- *Type:* string

---

##### `TraceNames`<sup>Required</sup> <a name="TraceNames" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.traceNames"></a>

```csharp
public string[] TraceNames { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3OperationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CtsEventNotificationV3Operations InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.ctsEventNotificationV3.CtsEventNotificationV3Operations">CtsEventNotificationV3Operations</a>

---



